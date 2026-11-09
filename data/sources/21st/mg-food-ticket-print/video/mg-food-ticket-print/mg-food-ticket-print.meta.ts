// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "receipt-feeds-from-printer"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "receipt-feeds-from-printer",
    "restaurant",
    "kitchen",
    "orders",
    "receipt"
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
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 56,
      "role": "body"
    },
    {
      "key": "stat",
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "receipt-feeds-from-printer",
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
    "ink": "#F6EFE6",
    "accent": "#FFB547",
    "secondary": "#D8321F",
    "paper": "#1D1814",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Tap. Print. Fire.",
    "brand": "fennel. kitchen line",
    "sub": "Every app order prints the second you pay.",
    "stat": "avg. ticket to pass 7:40"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 56,
      "role": "body"
    },
    {
      "key": "stat",
      "label": "Stat",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Kitchen Ticket Print",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-ticket-print",
    "bundleSha256": "2d4a8812bd6c0bdcffd66ba876222e9cfe0b5d51b916935e55cf0037ab53fc26",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:42.476Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-paper.png",
        "sha256": "32c50e6842705d246f7efee69ee4a46023521945865518f4b41b744f513271dc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-night.png",
        "sha256": "7670f7222c2c2216bbf1e916faf39796f92632296f19e240320f5ec5b1c28691"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-color.png",
        "sha256": "abb3840ad405a16fcf91c9f5438d79d84145e1bf1eeb7834643253a7437af496"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-paper.png",
        "sha256": "6e8f519e19a90b8038b0f64c767c0d81db1b0154e991c61f94f1a8a6d0b1c2d4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-night.png",
        "sha256": "06528fef1005cdd02915d77739704dc4a06a1701a8f5f10fd435ee3f1fb0d329"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-color.png",
        "sha256": "252a319bb06ec2f7b0310572722a817d714b3918272c9f793800ec91c6899d85"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-paper.png",
        "sha256": "5a0d0a10f58acd6e40fe2e5e42e0c7de334f76f7d0b7ba5e715a66e0c658fad6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-night.png",
        "sha256": "adac0ba7753d44ae77e0aed0706886ffa0e89b199f3f1f83145442b3b571e922"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-color.png",
        "sha256": "c157fa361876b1977df9a69a8d920d344f6862a1ba4b0fe9b26cef8865b8edcf"
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
          "mg-food-ticket-print--16x9",
          "mg-food-ticket-print--9x16",
          "mg-food-ticket-print--1x1"
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
            "paperNight": 14.13821072048611,
            "paperColor": 7.151258680555555,
            "region": {
              "left": 133,
              "top": 0,
              "width": 1787,
              "height": 1059
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.177598741319443,
            "paperColor": 13.00021701388889,
            "region": {
              "left": 85,
              "top": 0,
              "width": 909,
              "height": 1834
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 15.21896701388889,
            "paperColor": 7.692491319444445,
            "region": {
              "left": 74,
              "top": 0,
              "width": 1006,
              "height": 1080
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
            "occupancy": 1.292688419889561,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.292688419889561,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2934122095983458,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1381555580050953,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1381555580050953,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.139409033289242,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3175023095658018,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3175023095658018,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3201268161585624,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 21.546875,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 21.5498046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-90-frame-10.png",
                "sha256": "1a0dd4e6df09b6cdb03a4b846e35398287bab7d5204e203a22094a3fca4a7a78",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-90-frame-89.png",
                "sha256": "c9b0879eb22cb6924b2b63355000a8829cbe72d859636ddb8d1667e2429602ed",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-90-frame-79.png",
                "sha256": "c9b0879eb22cb6924b2b63355000a8829cbe72d859636ddb8d1667e2429602ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 21.546875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-900-frame-14.png",
                "sha256": "be5513865f99b34c99f1a05f6e29666a4ff3e70adcaff1b46a6423ee85523ec1",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-900-frame-96.png",
                "sha256": "1de1a0df132abf6ad77657c7649e0df009ccea96343cbe9d87583cc30ffd1171",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-900-frame-792.png",
                "sha256": "1de1a0df132abf6ad77657c7649e0df009ccea96343cbe9d87583cc30ffd1171",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/16x9-duration-900-frame-899.png",
                "sha256": "1de1a0df132abf6ad77657c7649e0df009ccea96343cbe9d87583cc30ffd1171",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.990559895833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-90-frame-10.png",
                "sha256": "957adad6097af9a6e2f099e0015ffcea03c14229267d96660b5ba2d53ad01254",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-90-frame-89.png",
                "sha256": "f04e6aac63c148e8988180a6566521c1b96fe9a44cc766a855a682aef48528f8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-90-frame-79.png",
                "sha256": "f04e6aac63c148e8988180a6566521c1b96fe9a44cc766a855a682aef48528f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 24.989149305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-900-frame-14.png",
                "sha256": "5fcc345a1ee01e92971d0e9987f083c03aef31cf1c74d37b514b5262ae690781",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-900-frame-96.png",
                "sha256": "f04e6aac63c148e8988180a6566521c1b96fe9a44cc766a855a682aef48528f8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-900-frame-792.png",
                "sha256": "f04e6aac63c148e8988180a6566521c1b96fe9a44cc766a855a682aef48528f8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/9x16-duration-900-frame-899.png",
                "sha256": "f04e6aac63c148e8988180a6566521c1b96fe9a44cc766a855a682aef48528f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 23.816731770833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-90-frame-10.png",
                "sha256": "b3e16154ae3abf1ea253fb0917f951b5b820f806beff8af9c9c14498841c4d59",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-90-frame-89.png",
                "sha256": "9abecd2adbfe7c5f91934c040d409f18ee87c6851e6ca914ef4338281dc7ff4b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-90-frame-79.png",
                "sha256": "9abecd2adbfe7c5f91934c040d409f18ee87c6851e6ca914ef4338281dc7ff4b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 23.814127604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-900-frame-14.png",
                "sha256": "eaa809d2a2832fffec01e2896b5b864678b9c5d93b28df8f5dcd6cfbad5b6209",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-900-frame-96.png",
                "sha256": "9abecd2adbfe7c5f91934c040d409f18ee87c6851e6ca914ef4338281dc7ff4b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-900-frame-792.png",
                "sha256": "9abecd2adbfe7c5f91934c040d409f18ee87c6851e6ca914ef4338281dc7ff4b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-ticket-print/1x1-duration-900-frame-899.png",
                "sha256": "9abecd2adbfe7c5f91934c040d409f18ee87c6851e6ca914ef4338281dc7ff4b",
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
        "note": "Kitchen printer prints an order ticket stamped fired beside a bold headline; rebrands distinct."
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
      "bundleSha256": "2d4a8812bd6c0bdcffd66ba876222e9cfe0b5d51b916935e55cf0037ab53fc26",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.089Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/16x9/detail.mp4",
      "bg": "#1d1814",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9e20de2d236c4e78f662d7f89a25f3f90da688097fd4ebb5b55eccb4e79fd047",
        "loop": "7347909ae481c4d80bb890931398e16d216f9c5859846c8096bc252789a40d60",
        "detail": "1dbdaacf7ae8f37fc6869740a1704f4b4215d3022a5ab716c787dd3240777d8d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/9x16/detail.mp4",
      "bg": "#1d1814",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ec30ce8735e1d3ec7e6410c52ac56711359545b7eb0fca5fe5ff3d02518999d8",
        "loop": "6774f4d01f7fff66a96935a71eeee182c7e6d1795e7740f8f7bf1477dfb1ff35",
        "detail": "cd047b919276dbf6522f4d04af0e2774e6527dfe815d7c914befec190089c6c4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ticket-print/1x1/detail.mp4",
      "bg": "#1d1814",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "399d72619e6eece7c3c3d23a32a7f8108c9812a710b54740834300903f57ac63",
        "loop": "ad70175b0bade6c82b917adba62c7887eb0b3777642c4def8dbaed35a5b04a24",
        "detail": "9704f2ef9a58ffcc97a9f4c66b877d7deca8f2a8c4e585b4bbc245b16ffbfe9a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2d4a8812bd6c0bdcffd66ba876222e9cfe0b5d51b916935e55cf0037ab53fc26/index.mjs",
    "sha256": "2d4a8812bd6c0bdcffd66ba876222e9cfe0b5d51b916935e55cf0037ab53fc26",
    "bytes": 202756,
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
    "at": "2026-10-09T07:14:11.959Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
