// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "grid-floor-camera-settle"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "grid-floor-camera-settle",
    "event",
    "hero",
    "conference",
    "registration"
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
      "in": 117,
      "out": 0
    },
    "markers": {
      "settled": 117
    },
    "beats": [
      0,
      29,
      59,
      88,
      117
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
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 44,
      "role": "caption"
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
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "grid-floor-camera-settle",
      "prop": "transform",
      "from": "enter",
      "settledBy": 117,
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
    "ink": "#F3F1FF",
    "accent": "#8C72FF",
    "secondary": "#7CF0C8",
    "paper": "#05060B",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Meridian Summit",
    "eyebrow": "Registration open",
    "sub": "Nov 18–20, 2026 · Lisbon · 120 talks",
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
      "brand": "fonts.heading"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 44,
      "role": "caption"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Synthwave Event Hero",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-hero-grid",
    "bundleSha256": "7174c7e0d4456d7f6befed5ab75a8bd846af4f309e01041c26354b6b4a729f30",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:46:05.296Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-paper.png",
        "sha256": "b28b79cc4286a3bc66e05ec1a54973dd68c667c92e0080e696f923242c94337c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-night.png",
        "sha256": "9d3284446fd6eb606957b8476b5a6f295a9b8140e685ef4e1eeb9bae6272859b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-color.png",
        "sha256": "d07f4fafa98f00727b8c0ec30c170e17e5e9a731183e7ca6971e9ae4d247d28d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-paper.png",
        "sha256": "006ae8796e2330380f555e19ece653700637abf11328dd9441030197cac64768"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-night.png",
        "sha256": "ce1561c05b2ce148eae46752733718e7a75e38ea43a46b0a159822534d9eab11"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-color.png",
        "sha256": "cc950cdfeaa300134fc1f3737f78bb04d41d314e2ca8063ebd84323ae9d00495"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-paper.png",
        "sha256": "98e962e26536c03eb67e84a60ce68b7ee3080777a2105b19bec263f74db52470"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-night.png",
        "sha256": "7763d1f05419bcd6eccb1c9617e567d3f080562f7115e2987667eb51d1bf617f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-color.png",
        "sha256": "28b200030176d53ce9ea4ed1d7ce75ddefd3a4089ce8335b8930e3699953ffe7"
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
          "mg-event-hero-grid--16x9",
          "mg-event-hero-grid--9x16",
          "mg-event-hero-grid--1x1"
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
            "paperNight": 35.84589301215278,
            "paperColor": 23.85283745659722,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 51.62841796875,
            "paperColor": 25.08810763888889,
            "region": {
              "left": 0,
              "top": 26,
              "width": 1080,
              "height": 1894
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.99951171875,
            "paperColor": 25.79633246527778,
            "region": {
              "left": 0,
              "top": 1,
              "width": 1080,
              "height": 1079
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4159213067943228,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4159213067943228,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4159213067943228,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.300347222222221,
        "frames": [
          17,
          117,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.04123263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-90-frame-10.png",
                "sha256": "7be78eaa3d78f27f2dcdd2efc918a47a8c5e568f6b9377249b08713912bb9e9f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-90-frame-89.png",
                "sha256": "cc956a60161b8cb7352901cd7d1d4fcea2aadc71d1b4b6f76f7b86c4d47f4b75",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-90-frame-79.png",
                "sha256": "cc956a60161b8cb7352901cd7d1d4fcea2aadc71d1b4b6f76f7b86c4d47f4b75",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.300347222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-900-frame-17.png",
                "sha256": "e20a6725496a12d2652723a266468ace67ce7d4cfbb8895e02fb6dcc9c1dfb66",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-900-frame-117.png",
                "sha256": "cc956a60161b8cb7352901cd7d1d4fcea2aadc71d1b4b6f76f7b86c4d47f4b75",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-900-frame-792.png",
                "sha256": "cc956a60161b8cb7352901cd7d1d4fcea2aadc71d1b4b6f76f7b86c4d47f4b75",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/16x9-duration-900-frame-899.png",
                "sha256": "cc956a60161b8cb7352901cd7d1d4fcea2aadc71d1b4b6f76f7b86c4d47f4b75",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 19.97146267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-90-frame-10.png",
                "sha256": "8846b8e9681ade451fb327a5f2d7858ef9271b223355cf0a7be7605db75b9496",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-90-frame-89.png",
                "sha256": "93f4051e2cf4f15db93f3f904063ab3f028892c4dc56581a91018960761d35f1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-90-frame-79.png",
                "sha256": "93f4051e2cf4f15db93f3f904063ab3f028892c4dc56581a91018960761d35f1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 19.93142361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-900-frame-17.png",
                "sha256": "81e6f7801f49e1c947d7637f3a90a77a9f669c15849ae09f5386efe35236d5cb",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-900-frame-117.png",
                "sha256": "cb7e6d6c78c1ced0af2a1151fd6f146fb60212050f9e071ab084c523ebb76cdc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-900-frame-792.png",
                "sha256": "14848c27fe35cec8cbd9833b7d985e9316b1887e108353c05d9c8b5aa3185373",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/9x16-duration-900-frame-899.png",
                "sha256": "cb7e6d6c78c1ced0af2a1151fd6f146fb60212050f9e071ab084c523ebb76cdc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.337890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-90-frame-10.png",
                "sha256": "2b603fc689600d023ecaa1ab748c27d58c51d96717b20aaad349c7bde8b30bdd",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-90-frame-89.png",
                "sha256": "74437fc140ec6d2f56ec9a20c862632fea416b601d8262953797506a0210f7cf",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-90-frame-79.png",
                "sha256": "74437fc140ec6d2f56ec9a20c862632fea416b601d8262953797506a0210f7cf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.554253472222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-900-frame-17.png",
                "sha256": "2b995b74dcff1ed98c80a31b286e8020ecca5dfa565e8d76d12afb57fb269173",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-900-frame-117.png",
                "sha256": "74437fc140ec6d2f56ec9a20c862632fea416b601d8262953797506a0210f7cf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-900-frame-792.png",
                "sha256": "74437fc140ec6d2f56ec9a20c862632fea416b601d8262953797506a0210f7cf",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-hero-grid/1x1-duration-900-frame-899.png",
                "sha256": "74437fc140ec6d2f56ec9a20c862632fea416b601d8262953797506a0210f7cf",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Synthwave grid horizon with a centered event title and two CTAs; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7174c7e0d4456d7f6befed5ab75a8bd846af4f309e01041c26354b6b4a729f30",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.094Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/16x9/detail.mp4",
      "bg": "#05060c",
      "posterFrame": 117,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "682a027fe824148c75fc42ec000b6a545118c34665c6de42857fd51c4669e370",
        "loop": "07c497eca99c972e4b3892f5d5aff9042d569124dd12c95dc3558b57713dde61",
        "detail": "22e4188e7de1f26af3b5caa462432329b86172b94da75a48638954d547eac2c0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/9x16/detail.mp4",
      "bg": "#05060b",
      "posterFrame": 117,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7249a9db314f55bde76d74772c04dddae17d34c9133debe919d47b1411eb26ba",
        "loop": "14c3ce5396d1fe72227a960591ba6f0da32949267e0f59caaaee59b02cf47d1a",
        "detail": "e0a0cf55e5d4a34bc3e44177017aaa8e3b4238800ad5addad2317816485cdbed"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-hero-grid/1x1/detail.mp4",
      "bg": "#06060c",
      "posterFrame": 117,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "61c2a978285698c0153278eee46d4400fce479b3ec19964dae4da4f97be90602",
        "loop": "51bf2397d397d23228498c365db309c80841b1aaa3032c33746e544c2b9dde1d",
        "detail": "c2e68ae8398da286dac56faa21eba2d48aa75f2beac123734b7d3b2f32b90af7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7174c7e0d4456d7f6befed5ab75a8bd846af4f309e01041c26354b6b4a729f30/index.mjs",
    "sha256": "7174c7e0d4456d7f6befed5ab75a8bd846af4f309e01041c26354b6b4a729f30",
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
    "at": "2026-10-09T07:17:43.794Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
