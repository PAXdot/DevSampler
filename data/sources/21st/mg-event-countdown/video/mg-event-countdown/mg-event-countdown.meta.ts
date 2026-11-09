// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "pixel-terminal",
  "mechanic": [
    "split-flap-countdown"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "split-flap-countdown",
    "countdown",
    "event",
    "departure-board",
    "timer"
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
      "key": "label",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "event",
      "type": "text",
      "maxChars": 26,
      "role": "label"
    },
    {
      "key": "offer",
      "type": "text",
      "maxChars": 56,
      "role": "body"
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
      "target": "split-flap-countdown",
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
    "ink": "#EDE6D6",
    "accent": "#FFB627",
    "secondary": "#7CE38B",
    "paper": "#0D0C0A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "label": "Doors open in",
    "event": "Meridian Summit 26",
    "offer": "Early-bird €249 ends when the board hits zero.",
    "cta": "Get your pass"
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
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "event",
      "label": "Event",
      "type": "text",
      "max": 26,
      "role": "label"
    },
    {
      "key": "offer",
      "label": "Offer",
      "type": "text",
      "max": 56,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Split Flap Countdown",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-countdown",
    "bundleSha256": "ec92c786799e41b9a1f21004082f9126266faeb59a6932f920a0d75c12598328",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:47:28.642Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-paper.png",
        "sha256": "8ff1bd9bc22dcc8c9f8d7d1094a8e539c5b17ac7e0e2a55ebcef134965c28628"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-night.png",
        "sha256": "03d17cabee9aac728e61ec1190924f4ed8033aaab9874b050a13c1ef315408e0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-color.png",
        "sha256": "6d23cadd42a95e248f22f13f0891f46fc541affbec18ec812105f6e009a32b22"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-paper.png",
        "sha256": "1627c81cf998714add23cd409e83774cfb6f9c0e4a70f13398519d69b790574a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-night.png",
        "sha256": "7fd67d5028eae0287e67e786f4f2214936ae3adbbfafe3075c6aefdc518c3462"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-color.png",
        "sha256": "9406d3bee11b7b79d7bf39dc8c556b9ca01f6e3a475bc5bb470f6c7b6ee331ef"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-paper.png",
        "sha256": "31a18dd2e925b77c5ea6adb374c9a79b43ed1b9a40985badbf5a45aab30943e0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-night.png",
        "sha256": "62432ea741846f617153915ac2bbc70a717e87f7dc3ec106109266fedf06b356"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-color.png",
        "sha256": "bdfb5ccb04744a7d57b58dfdb2128873d429a38bfec73a050fc3fb94bcd66b52"
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
          "mg-event-countdown--16x9",
          "mg-event-countdown--9x16",
          "mg-event-countdown--1x1"
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
            "paperNight": 23.97848849826389,
            "paperColor": 8.705674913194445,
            "region": {
              "left": 96,
              "top": 82,
              "width": 1728,
              "height": 954
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.987331814236114,
            "paperColor": 15.825575086805555,
            "region": {
              "left": 56,
              "top": 67,
              "width": 959,
              "height": 1788
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 28.698811848958332,
            "paperColor": 9.90549045138889,
            "region": {
              "left": 47,
              "top": 66,
              "width": 985,
              "height": 959
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
            "occupancy": 1.1255196523053668,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1267006802721091,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1267006802721091,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1571941662467458,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1719324110817169,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1584900163769214,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1465570167253003,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1465886080083614,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1465886080083614,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.755750868055555,
        "frames": [
          13,
          87,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.845920138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-90-frame-10.png",
                "sha256": "e091ed6c741406c35d7f2ceb593d5e868b7f454eebc8c96d97feced81a2a7a80",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-90-frame-87.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-90-frame-79.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-90-frame-89.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.755750868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-900-frame-13.png",
                "sha256": "2081e644ee55612cc8e94c49dfd1ba637b421abc7cb29d5c2936e62174e5d15a",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-900-frame-87.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-900-frame-792.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/16x9-duration-900-frame-899.png",
                "sha256": "e0a9e41cbce45ec84365abdbc58cd44f69c432fc03a9accfdf40e1a99f9c5dab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.96365017361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-90-frame-10.png",
                "sha256": "7367a5b560da1f1ba9695cb39eb3ed22bd9863d2b106c1fb3e2520895bb55bc6",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-90-frame-87.png",
                "sha256": "28f84aa234a3da2812722693a415d97be424812667af9b07e5064413d8f0db37",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-90-frame-79.png",
                "sha256": "df5cf8b33b4527da3345f5620dea0bda5261823f0a5606db4eef29528906a346",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-90-frame-89.png",
                "sha256": "5c54093a41ee5b0b8f1ce64092495165940a42207308699d9b12d728e90de039",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.798936631944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-900-frame-13.png",
                "sha256": "105e7bd6801d69fdfa18cfcf3bb81300641b1d2ed54e74d6fc3364657cfe73c4",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-900-frame-87.png",
                "sha256": "35efcf3cb950d8983090035f867ad9efc0eaae059d32e747d9ed6b2924f4233c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-900-frame-792.png",
                "sha256": "f5f0f8d34413cc249982cbb56eccf2ca4c36c09e0e3fb6b8b3a8ec1309ef9d04",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/9x16-duration-900-frame-899.png",
                "sha256": "94897fc48104345aa97974124cf0968316d51a3dcc907428f8b5f2805d8657ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.050672743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-90-frame-10.png",
                "sha256": "a83dd891b732ee7cf4870c8cef82d81bd42cb591cb0ae566f2eb7c7b9f79364c",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-90-frame-87.png",
                "sha256": "eb0e08f39b460b004d7e7cf38369d1b2b6cb948e59b93c886d332c4ef46a5b78",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-90-frame-79.png",
                "sha256": "eb0e08f39b460b004d7e7cf38369d1b2b6cb948e59b93c886d332c4ef46a5b78",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-90-frame-89.png",
                "sha256": "773ff3a02db6f4e4bd207983194faa45683a6eadfae199dc53574df88557d16d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.960394965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-900-frame-13.png",
                "sha256": "86b56382c7b83008d5b4a5ef9049445b91866f3b905e1b1ca0852ea909d9662a",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-900-frame-87.png",
                "sha256": "eb0e08f39b460b004d7e7cf38369d1b2b6cb948e59b93c886d332c4ef46a5b78",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-900-frame-792.png",
                "sha256": "eb0e08f39b460b004d7e7cf38369d1b2b6cb948e59b93c886d332c4ef46a5b78",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-countdown/1x1-duration-900-frame-899.png",
                "sha256": "773ff3a02db6f4e4bd207983194faa45683a6eadfae199dc53574df88557d16d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Split-flap departures board counts down to doors with a pass CTA; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ec92c786799e41b9a1f21004082f9126266faeb59a6932f920a0d75c12598328",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.095Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-countdown/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-countdown/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-countdown/16x9/detail.mp4",
      "bg": "#0d0c0a",
      "posterFrame": 87,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9be8a21ba8385ed195897877f96633ab48f076796b8826058aa60114e6564779",
        "loop": "4186c74a283f170f6c983dcca237985da4d88f44344773e5fcba2727207934aa",
        "detail": "88fad5bfaa451f24b786828a80fd2e3cb0fc5dd1b2894ffe843761170b0caff5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-countdown/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-countdown/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-countdown/9x16/detail.mp4",
      "bg": "#0d0c0a",
      "posterFrame": 87,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6c89d5f255afc8b84374363a8e414619026026e904895cf874aba2f9f6b71e3c",
        "loop": "f3c55eb0dd68b3c0fc218d3ee7ce113610ddcc1997ebb42dece99ba7e94b9b46",
        "detail": "f90ad62610a6d0134df7c3c895e2c3aeae48162ec70351aef81ce2f89408024d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-countdown/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-countdown/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-countdown/1x1/detail.mp4",
      "bg": "#0d0c0a",
      "posterFrame": 87,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2fa3ec90d4a6e936d57c9832d7d4874ed590b0610d8a31b5e3c8a80d04b769a0",
        "loop": "168325224763675304680ecc5937d8febe17ad20b9a991e77b0bcb4048ce4d97",
        "detail": "b509dcf61cc758502850be2dab068c9da69c48abc530c2531e8400e715ae5c8a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ec92c786799e41b9a1f21004082f9126266faeb59a6932f920a0d75c12598328/index.mjs",
    "sha256": "ec92c786799e41b9a1f21004082f9126266faeb59a6932f920a0d75c12598328",
    "bytes": 295995,
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
    "at": "2026-10-09T07:18:02.622Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
