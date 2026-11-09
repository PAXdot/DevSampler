// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "timeline-scroll-live-highlight"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "timeline-scroll-live-highlight",
    "agenda",
    "schedule",
    "event",
    "timeline"
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
      "key": "day",
      "type": "text",
      "maxChars": 10,
      "role": "headline"
    },
    {
      "key": "date",
      "type": "text",
      "maxChars": 28,
      "role": "label"
    },
    {
      "key": "session",
      "type": "text",
      "maxChars": 30,
      "role": "label"
    },
    {
      "key": "event",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
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
      "target": "timeline-scroll-live-highlight",
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
    "ink": "#F3ECDD",
    "accent": "#FF8A3D",
    "secondary": "#A8F0C6",
    "paper": "#0F241D",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "day": "Day 02",
    "date": "Thursday, November 19",
    "session": "Live build: realtime maps",
    "event": "Meridian 26 · Agenda"
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
      "key": "day",
      "label": "Day",
      "type": "text",
      "max": 10,
      "role": "headline"
    },
    {
      "key": "date",
      "label": "Date",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "session",
      "label": "Session",
      "type": "text",
      "max": 30,
      "role": "label"
    },
    {
      "key": "event",
      "label": "Event",
      "type": "text",
      "max": 26,
      "role": "kicker"
    }
  ],
  "name": "Live Agenda Timeline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-agenda",
    "bundleSha256": "0674ce68b1066fd6af1e6b918efcf095eba919a4cdddbe1e97766a53b63562bf",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:09.377Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-paper.png",
        "sha256": "37ee3516dcec033a892528d96d3ad6a8ebb8917efc4fc9a5aa7cdbdfe7219bbe"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-night.png",
        "sha256": "7c3fa7c47021355ab0005598f849f1fd0cb646e4e47cb371c57acbbd348a56c2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-color.png",
        "sha256": "3b948d49a4c4dc54cf16eb0ef254f4ecbd6572c737238013301684fadd9f0b13"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-paper.png",
        "sha256": "e1d69a6d611aaa46a7963f39eff91cf3f15ce26768e7f47d5d694a55b5107c7b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-night.png",
        "sha256": "6dfd45598f0b2dcb3ea27f147a94d572bc731205234f92001eab6316b2f3f3f1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-color.png",
        "sha256": "3dad660e9fcf1e9069fcb12f2631b72ea0074e8b41f4e91fffe90fe5bbf464be"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-paper.png",
        "sha256": "36c3ce399c29d25839f9f7ea644e22339744356c6421e3827fbcfce36c52c45a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-night.png",
        "sha256": "15ab2dd80d68e186f80f090920d745dca8be97dcf076272582976475ac218b5f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-color.png",
        "sha256": "73dda3d34570a3cf3e3202c741d4b67f5d4ed590fd2d1fc7761735a5d74a9719"
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
          "mg-event-agenda--16x9",
          "mg-event-agenda--9x16",
          "mg-event-agenda--1x1"
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
            "paperNight": 94.22832573784723,
            "paperColor": 25.20404730902778,
            "region": {
              "left": 96,
              "top": 89,
              "width": 1747,
              "height": 897
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 94.69002278645833,
            "paperColor": 28.446180555555557,
            "region": {
              "left": 15,
              "top": 94,
              "width": 1022,
              "height": 1738
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 100.045166015625,
            "paperColor": 27.21609157986111,
            "region": {
              "left": 16,
              "top": 66,
              "width": 1010,
              "height": 951
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
            "occupancy": 1.0710303845689513,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0710303845689513,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0710303845689513,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2139955969527731,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2139955969527731,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.213297095458554,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1670670497279847,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1659115377975608,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1659115377975608,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.106336805555555,
        "frames": [
          13,
          87,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.137912326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-90-frame-10.png",
                "sha256": "600069cd503a41dbc50f7173cb8991f7e9c43a31b28306ac05051ed982ae98a3",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-90-frame-87.png",
                "sha256": "80cf5deaabe9bc7fde24abb32bf6820c615b71003f3e5c7511715796974986d0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-90-frame-79.png",
                "sha256": "e36143d1bf0e2f66ebe2755eec66d7ed96ec534caf716499f6ef8dff013be0c0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-90-frame-89.png",
                "sha256": "80cf5deaabe9bc7fde24abb32bf6820c615b71003f3e5c7511715796974986d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.106336805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-900-frame-13.png",
                "sha256": "5076afb39b606418f57d5f06f11d796ed4390304ab880e0132e342e9f140a4cc",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-900-frame-87.png",
                "sha256": "80cf5deaabe9bc7fde24abb32bf6820c615b71003f3e5c7511715796974986d0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-900-frame-792.png",
                "sha256": "80cf5deaabe9bc7fde24abb32bf6820c615b71003f3e5c7511715796974986d0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/16x9-duration-900-frame-899.png",
                "sha256": "80cf5deaabe9bc7fde24abb32bf6820c615b71003f3e5c7511715796974986d0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.466362847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-90-frame-10.png",
                "sha256": "9c6a4da62ca13fcbf6d996eb7461ad834997a9f94ebf18b31454050f2c26f3b6",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-90-frame-87.png",
                "sha256": "d60bc1210bb5510173db42a741c9268c5d68caf37d2865042a0d36edf8ed2d97",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-90-frame-79.png",
                "sha256": "ca0c73310452659975068ed0ef902bda51b17c3c5a694949ccce456456e83a29",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-90-frame-89.png",
                "sha256": "0969fde25b6fcca11b109f0cc7b6cef0802b1c85c38d0c5b35afecc0b6bc91dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 12.46169704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-900-frame-13.png",
                "sha256": "0ea0a224509b917e8890bbd7b5254400b449c827aed9f6cc5960f8b7827c265e",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-900-frame-87.png",
                "sha256": "ed37e7b869d2a2ff91a4b30e9852f13edc251d70b76a1534adbe35ceaabed40f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-900-frame-792.png",
                "sha256": "c52068dbca7a6f4ffe52445d4dc96916b89af500ace42f22b4fa1f8d56916319",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/9x16-duration-900-frame-899.png",
                "sha256": "ca0c73310452659975068ed0ef902bda51b17c3c5a694949ccce456456e83a29",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.359266493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-90-frame-10.png",
                "sha256": "69e607efbcbd22ee5a68e6d70e55ba0f06ed7ca382ae561526f9951137ad6705",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-90-frame-87.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-90-frame-79.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-90-frame-89.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.352213541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-900-frame-13.png",
                "sha256": "67531e261d44dc0d941ede97f7f87dabbe103dbf7347424e1265fbb36f26f85e",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-900-frame-87.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-900-frame-792.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-event-agenda/1x1-duration-900-frame-899.png",
                "sha256": "a81f1eb3c94954117f6ab0b6c255ecdeb5adac4a5a982c5e24181c49502d4073",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Live agenda timeline scrolls to the current session beside the day title and clock; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0674ce68b1066fd6af1e6b918efcf095eba919a4cdddbe1e97766a53b63562bf",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.845Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-agenda/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-agenda/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-agenda/16x9/detail.mp4",
      "bg": "#0f241d",
      "posterFrame": 87,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9bb3b198c2cedb2ce92662e9cfda50a3f94764698395685404946354e7f2cbba",
        "loop": "1b238100049589da85e7723a6a53caa6979bf40bbf9362da4b94af6d8e4d858e",
        "detail": "053845b60bb5e491ed13b60cc4c67e3771a19b3ff0a3079281eff283d2629235"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-agenda/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-agenda/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-agenda/9x16/detail.mp4",
      "bg": "#0f241d",
      "posterFrame": 87,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0f4800fc2e4157141edf10a428545a4578ad5749d85f60faadd0e082e12d0ded",
        "loop": "a6a167aefe30605503ba0145e6a5817a869596c25b78bef9f37e3a40f936c7f0",
        "detail": "92dd8b1bcc9b335e4b31d5025556614a32af7c4eaf0da7e38592dde23dd46c2c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-agenda/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-agenda/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-agenda/1x1/detail.mp4",
      "bg": "#0f241d",
      "posterFrame": 87,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6146fc686f305eb3538d1e18b8d290b9cd0daf658e523f276c533647fe5201f9",
        "loop": "1f11c8069bd64adb4754d473fdc6dba176a4f87bce4c16b2b8d7226afd9b0ece",
        "detail": "34132fc9db57f23245729f9551e173d7e8af10dc8570510d1f3706f7163a4609"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0674ce68b1066fd6af1e6b918efcf095eba919a4cdddbe1e97766a53b63562bf/index.mjs",
    "sha256": "0674ce68b1066fd6af1e6b918efcf095eba919a4cdddbe1e97766a53b63562bf",
    "bytes": 296626,
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
    "at": "2026-10-09T08:00:56.853Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
