// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "arch-portrait-quote-highlight"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "arch-portrait-quote-highlight",
    "hiring",
    "employee",
    "quote",
    "editorial"
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
      "key": "pub",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 80,
      "role": "headline"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 40,
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
      "target": "arch-portrait-quote-highlight",
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
    "ink": "#2A1F17",
    "accent": "#C2502C",
    "secondary": "#FFCF5C",
    "paper": "#F2E8D6",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "pub": "Voices of Wayfold",
    "quote": "Nobody here asks you to wait your turn. I shipped in my first week.",
    "name": "Maya Okafor",
    "role": "Staff Engineer, 3 years at Wayfold"
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
      "key": "pub",
      "label": "Pub",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 80,
      "role": "headline"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Employee Quote Arch",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-quote",
    "bundleSha256": "c4e07a4ede0f48c46be84027da7c9f02967384e87926a3eae4dcfba8c55bbfad",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:03:04.678Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-paper.png",
        "sha256": "737c59937e57a1ba936d97c822299e3025d11526f2c165470ddeeceedc44a31f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-night.png",
        "sha256": "26f6bc392596489b590a173fc311ff6c3d46cf83f2a1d9d122af70e4c115120f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-color.png",
        "sha256": "c75ffd81d70be3cfa01d3934901b4fa9ee197b241b421a21a6fd27ad074622a9"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-paper.png",
        "sha256": "be82385f8d9f05acf74170574e6cf58a518e80af3fc586595e74c56a3c1bbbd8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-night.png",
        "sha256": "ab3920a57d25698d2f7685ae8ee48c9a8b44a88719f530c53bc4b71debf27799"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-color.png",
        "sha256": "3fc50aafa1fd1281508dbe86202b01ec188891a8d747e308365721c6f19fc9c7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-paper.png",
        "sha256": "2de451ac2af147072da16f54a73c72dd4a584e3191851c98afd73fbea1d5ae27"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-night.png",
        "sha256": "f2fee2b7419f1f14cf932f8988437eb4cce5f5c8714ba7044d7c84850ad34dc5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-color.png",
        "sha256": "a8bf21f40725b305f003b2a6d0a3625d08b69e5dcc7606c07277283e971c9890"
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
          "mg-hire-quote--16x9",
          "mg-hire-quote--9x16",
          "mg-hire-quote--1x1"
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
            "paperNight": 44.04706488715278,
            "paperColor": 16.414957682291668,
            "region": {
              "left": 115,
              "top": 66,
              "width": 1692,
              "height": 925
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 60.279025607638886,
            "paperColor": 23.990125868055557,
            "region": {
              "left": 78,
              "top": 125,
              "width": 968,
              "height": 1675
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.28974066840278,
            "paperColor": 16.511121961805557,
            "region": {
              "left": 64,
              "top": 59,
              "width": 953,
              "height": 923
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
            "occupancy": 1.063806840251533,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0696914761274883,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0604400903880074,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.104862598331514,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0474959418566812,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.041242234741119,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0641888213904678,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0687804928784501,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0629907827328464,
            "bad": [],
            "measured": 17
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.26584201388889,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.33908420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-90-frame-10.png",
                "sha256": "35ea6da79f1a963cc8f71a9c2e7635a34768eabb09e004125caf45e92c38b58d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-90-frame-89.png",
                "sha256": "f4e32f36c7aa7d67a3ab578e372cc710c98f4a5007349ef49db98f5d87eefd88",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-90-frame-79.png",
                "sha256": "f4e32f36c7aa7d67a3ab578e372cc710c98f4a5007349ef49db98f5d87eefd88",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.26584201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-900-frame-14.png",
                "sha256": "639731825560e6a6e96dc3b29a749c755b4a314b3d4ee58d7476d77e3dd4df70",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-900-frame-96.png",
                "sha256": "f4e32f36c7aa7d67a3ab578e372cc710c98f4a5007349ef49db98f5d87eefd88",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-900-frame-792.png",
                "sha256": "f4e32f36c7aa7d67a3ab578e372cc710c98f4a5007349ef49db98f5d87eefd88",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/16x9-duration-900-frame-899.png",
                "sha256": "f4e32f36c7aa7d67a3ab578e372cc710c98f4a5007349ef49db98f5d87eefd88",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.99826388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-90-frame-10.png",
                "sha256": "2722140d6b7e6b685b8dac99860b41549166b617d7688e04b756df94b3bf8f8d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-90-frame-89.png",
                "sha256": "8a223c013e8acf3c13a4a332c2e506c0a5a78adc49168f2b7aa01bf8efe9215b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-90-frame-79.png",
                "sha256": "8a223c013e8acf3c13a4a332c2e506c0a5a78adc49168f2b7aa01bf8efe9215b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.90017361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-900-frame-14.png",
                "sha256": "2a69e49b8b1991d9b7e2792790136c28ec9332a3b062c3766f7ea863d4ee3c0c",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-900-frame-96.png",
                "sha256": "8a223c013e8acf3c13a4a332c2e506c0a5a78adc49168f2b7aa01bf8efe9215b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-900-frame-792.png",
                "sha256": "8a223c013e8acf3c13a4a332c2e506c0a5a78adc49168f2b7aa01bf8efe9215b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/9x16-duration-900-frame-899.png",
                "sha256": "8a223c013e8acf3c13a4a332c2e506c0a5a78adc49168f2b7aa01bf8efe9215b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.7861328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-90-frame-10.png",
                "sha256": "628db6534b47beb08598cb45491de552d585b1111c36dad2e7d8e9a16762745c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-90-frame-89.png",
                "sha256": "cb8a00660f371e369f8eb9b5ede7a18cb47f88fc841093e83a5762153fda1ff6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-90-frame-79.png",
                "sha256": "cb8a00660f371e369f8eb9b5ede7a18cb47f88fc841093e83a5762153fda1ff6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.69607204861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-900-frame-14.png",
                "sha256": "fdbc5d505b0d21d69bb9b53e1f08acf7d01e589f4672e95c832523e1c0f86f96",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-900-frame-96.png",
                "sha256": "e1fd8ba5cc854a0d6bb254ec7aacd9e33db8f52e919e2d90752215f37ac28ceb",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-900-frame-792.png",
                "sha256": "e1fd8ba5cc854a0d6bb254ec7aacd9e33db8f52e919e2d90752215f37ac28ceb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-quote/1x1-duration-900-frame-899.png",
                "sha256": "cb8a00660f371e369f8eb9b5ede7a18cb47f88fc841093e83a5762153fda1ff6",
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
        "note": "Employee quote in an arch layout with a marker underline on the last words that follows any brand font."
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
      "bundleSha256": "c4e07a4ede0f48c46be84027da7c9f02967384e87926a3eae4dcfba8c55bbfad",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.091Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-quote/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-quote/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-quote/16x9/detail.mp4",
      "bg": "#d6ccbc",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4b9f12910fd8285fd5dbf1fc471ed13a9e468d662aa22784a5e9d1e24e7106c5",
        "loop": "0da2c35f9a60db097cace4cd544762a179076220eabf9aaa5f1d4108087a0e4e",
        "detail": "147609821c9c226dcf440548420c7d554f2313d50d816cfe3e6c77fb165f6e87"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-quote/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-quote/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-quote/9x16/detail.mp4",
      "bg": "#d6ccbc",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bf69ad185ae9f553b96aa98beebb67fd4fa4c13f86b642da6886e4f10cb7b911",
        "loop": "c784d1c72dbfe2328c0f6703d126cf5bf163c8ea0cea3af1cfbbff175aa8bbf4",
        "detail": "839a79e533533b12bd6c8829b664de15e2e3c917632def17e0358484deb40846"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-quote/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-quote/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-quote/1x1/detail.mp4",
      "bg": "#d6ccbc",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c6859d4932d7b63f30c9e03d0069eb026af822d3af9805f70bac75350012afec",
        "loop": "d7be5cf30c5178fb4eae1b933af94f78a12521f834f96e075f807f12f67293a3",
        "detail": "1d8694d3e44d49521ff0d190de398b37ee73c1cb458b067a44872317726bc137"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c4e07a4ede0f48c46be84027da7c9f02967384e87926a3eae4dcfba8c55bbfad/index.mjs",
    "sha256": "c4e07a4ede0f48c46be84027da7c9f02967384e87926a3eae4dcfba8c55bbfad",
    "bytes": 183589,
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
    "at": "2026-10-09T07:15:40.608Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
