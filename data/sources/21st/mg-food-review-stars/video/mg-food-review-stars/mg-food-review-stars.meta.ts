// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "score-roll-review-stack"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "score-roll-review-stack",
    "restaurant",
    "reviews",
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "key": "score",
      "type": "text",
      "maxChars": 4,
      "role": "value"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "count",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 64,
      "role": "body"
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
      "target": "score-roll-review-stack",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#221A14",
    "accent": "#D8462B",
    "secondary": "#B8892F",
    "paper": "#F5EDE0",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "score": "4.9",
    "kicker": "what our guests say",
    "count": "from 2,140 reviews",
    "quote": "“Best bowl in the city, and it arrived still steaming.”"
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
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 4,
      "role": "value"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 64,
      "role": "body"
    }
  ],
  "name": "Guest Rating Stack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-review-stars",
    "bundleSha256": "1b764129382948dfdab843e20e5cfa34a4f685b60e46168b48283af6e96e97f5",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:16.602Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-paper.png",
        "sha256": "2ce57d43344ff8c3c53199578c88c71c6e062fd0dbd89b5c442aaa74ff53693e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-night.png",
        "sha256": "2f04bdb5c7ed42a69a92205591ef5548180126d9423776b45ae4344aebe39af4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-color.png",
        "sha256": "6652283ff549036619a6e05c14b6d9bc2fd1b5913636f55e3c01aeb68168a521"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-paper.png",
        "sha256": "a81f370134846658c8f674949d44a6416f79f77cfbc48f629b5223e98c279dd4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-night.png",
        "sha256": "910a2aafb699f32c2d3ea36906c784e2267750b339364e1b6e3427a9e36f5317"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-color.png",
        "sha256": "2e55d63ee68be4b30b0ea984e25828cb29cee3168a238607bb28d04672450e98"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-paper.png",
        "sha256": "2ff499324115822e78ef9b489bfe7ed9f9c9b3867db5a56a7a386a8cc1eae848"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-night.png",
        "sha256": "b5a293b6a21c8de1d083cf812b41ae9900c6ceaf32fe32b3d03b0522cc7255fc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-color.png",
        "sha256": "0be0242bc2ad346cb1f17a81717997f67a29d785e1e37a03317f8d6f524ed2c7"
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
          "mg-food-review-stars--16x9",
          "mg-food-review-stars--9x16",
          "mg-food-review-stars--1x1"
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
            "paperNight": 44.22612847222222,
            "paperColor": 12.0888671875,
            "region": {
              "left": 134,
              "top": 6,
              "width": 1665,
              "height": 885
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 55.00721571180556,
            "paperColor": 15.227349175347221,
            "region": {
              "left": 44,
              "top": 0,
              "width": 988,
              "height": 1666
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.831380208333336,
            "paperColor": 12.199381510416666,
            "region": {
              "left": 75,
              "top": 0,
              "width": 957,
              "height": 1069
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
            "occupancy": 0.9832057823129254,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0071031450774757,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9297212085065509,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1243140195893175,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1249892832647466,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0885250447915795,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2255935467465453,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2430355801442665,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1766878104694098,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.685221354166667,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.684678819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-90-frame-10.png",
                "sha256": "d3b5bff7adf22f48aa5c694f3c65d619db21759e378176df0c296de8926802db",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-90-frame-89.png",
                "sha256": "4dd17701bca62c8ff19615fef3e7ff770a06c3d6536a458f7c4d43eb189edd0d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-90-frame-79.png",
                "sha256": "4dd17701bca62c8ff19615fef3e7ff770a06c3d6536a458f7c4d43eb189edd0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.685221354166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-900-frame-13.png",
                "sha256": "c97b987715793d54076d3bb7de02698a9e5ef3e0af7461bb2099dbfcd3472c88",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-900-frame-93.png",
                "sha256": "4dd17701bca62c8ff19615fef3e7ff770a06c3d6536a458f7c4d43eb189edd0d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-900-frame-792.png",
                "sha256": "4dd17701bca62c8ff19615fef3e7ff770a06c3d6536a458f7c4d43eb189edd0d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/16x9-duration-900-frame-899.png",
                "sha256": "4dd17701bca62c8ff19615fef3e7ff770a06c3d6536a458f7c4d43eb189edd0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.663628472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-90-frame-10.png",
                "sha256": "862f37b35d9b146803d3cabc2ded58e39ef0342c01f2657641421b4a920dc2b8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-90-frame-89.png",
                "sha256": "23cf6205c2044ddd6f5cfd6244a2464cb1d80f55c9a31eaa48442089d4a294a3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-90-frame-79.png",
                "sha256": "23cf6205c2044ddd6f5cfd6244a2464cb1d80f55c9a31eaa48442089d4a294a3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.671223958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-900-frame-13.png",
                "sha256": "e325c1e3051cfbbdc8eaadb72f4adcc94e383ce7f93933c1ee285e3dbf024275",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-900-frame-93.png",
                "sha256": "23cf6205c2044ddd6f5cfd6244a2464cb1d80f55c9a31eaa48442089d4a294a3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-900-frame-792.png",
                "sha256": "23cf6205c2044ddd6f5cfd6244a2464cb1d80f55c9a31eaa48442089d4a294a3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/9x16-duration-900-frame-899.png",
                "sha256": "23cf6205c2044ddd6f5cfd6244a2464cb1d80f55c9a31eaa48442089d4a294a3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.700629340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-90-frame-10.png",
                "sha256": "ff72b049f107936d4eae6fde05cdcbef87cb3e060a59b67a956e21e514034508",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-90-frame-89.png",
                "sha256": "79f75fc1d0afd0ba1bdc6ea43a99fdd0c8a8e8429284e0e2767aa03135c44492",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-90-frame-79.png",
                "sha256": "71dda8a0e963c54f871bc3177d7c30760663e28af3858e259ad3bd2d569dd4ac",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.706271701388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-900-frame-13.png",
                "sha256": "55bb99068cb1fe62c267b391ac5df2a756e85d4c174d74f3a9fdc00023bdd3e7",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-900-frame-93.png",
                "sha256": "96dded43204c9e4a03d78d8a1b1a433c4f0594aa982d3cfa2143c2ef738e8a97",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-900-frame-792.png",
                "sha256": "96dded43204c9e4a03d78d8a1b1a433c4f0594aa982d3cfa2143c2ef738e8a97",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-review-stars/1x1-duration-900-frame-899.png",
                "sha256": "119513ea9cc706a4a59b7de7a3903b5000f79d287bea7b62013073de32f689b5",
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
        "note": "Rating counter and stars beside stacked guest review cards; rebrands distinct."
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
      "bundleSha256": "1b764129382948dfdab843e20e5cfa34a4f685b60e46168b48283af6e96e97f5",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.089Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-review-stars/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-review-stars/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-review-stars/16x9/detail.mp4",
      "bg": "#f5ece0",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "87647fab0bee3d6b29ec2843cf8e97037df334c808dce2882e5387471ec95a88",
        "loop": "006b6dde166b3b542977e185acaa4d67c582857bd7385f709652ff852f84a8fa",
        "detail": "04074761e5b2e98b1edd42789b74fa2d63fbdd0eba48148c77ecc3eea40b8508"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-review-stars/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-review-stars/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-review-stars/9x16/detail.mp4",
      "bg": "#f5ece0",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ae27829759b36bf5cfff794b34d37f58f6846d14beec120c9d7443c1a9aec76c",
        "loop": "1b51408cb8c8b2c02db38947cb78b6eac6a82665ae8fc7f5819dbb4f06c6f165",
        "detail": "83bb8cd68cc9eed9c79b9733c80aa0a8a4548b08d29a494c13f351d196de2a64"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-review-stars/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-review-stars/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-review-stars/1x1/detail.mp4",
      "bg": "#f5ece0",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c83d884b2174f8cbe00e445484c06cd86299356382deb2a8b05544699012a3b0",
        "loop": "4abaca43f264355d8a1b927dd1246ecbc07be5a7653dc8c13faf5c0fbd4a41a5",
        "detail": "eba7a7862f2a8c09ce5990da7c0a8efaa8a5146dbf855ce02ff398c5b903bf8d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1b764129382948dfdab843e20e5cfa34a4f685b60e46168b48283af6e96e97f5/index.mjs",
    "sha256": "1b764129382948dfdab843e20e5cfa34a4f685b60e46168b48283af6e96e97f5",
    "bytes": 187757,
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
    "at": "2026-10-09T07:14:41.988Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
