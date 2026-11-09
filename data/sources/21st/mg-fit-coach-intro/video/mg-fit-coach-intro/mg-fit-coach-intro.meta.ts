// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "key-light-push-name-reveal"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "key-light-push-name-reveal",
    "fitness",
    "coach",
    "lower-third"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 36,
      "role": "body"
    },
    {
      "key": "quote",
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
      "target": "key-light-push-name-reveal",
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
    "ink": "#F5EEE6",
    "accent": "#C8FF2E",
    "secondary": "#FF8A3D",
    "paper": "#0D0A09",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Meet your coach",
    "name": "Ana Reyes",
    "role": "Head coach · Strength & mobility",
    "quote": "Strong is a skill. We practice it."
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 36,
      "role": "body"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Coach Intro Lower Third",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-coach-intro",
    "bundleSha256": "c037a244a208dcf8c616904db53852e757526bcb255a613988404df65c09dc8d",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:07:49.930Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-paper.png",
        "sha256": "d78d14f3a779d43fed0864c2f88c93ff72fad2ce21bd9b1279ee8eb985c908fb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-night.png",
        "sha256": "2e0ff0d30beadf5e5ee5833ef2a4476c906a1d1bb8ea27781ccd3acb21d9f67b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-color.png",
        "sha256": "ac9e679683ccaec2119b3ba72d513df6cbb86de4bc282c2ab9d146d9af932976"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-paper.png",
        "sha256": "bb2cbeb0d737ba3918df2323f4b1c9cf95b88a79890bc4fa58c7de1164092a72"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-night.png",
        "sha256": "70f43dcfcc1d49649ee3b829cd3e3bd0ab19242912b6e6a5c8a4d7995e25a7bc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-color.png",
        "sha256": "9726bf000dbd2d2664027a1f3f2ccc2a5eb17c9d87eda742c5c9471e8c6feaad"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-paper.png",
        "sha256": "71b216d15384906c926edc086ef4d322e0cfefaf6f0d98bce63f21205b9368cf"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-night.png",
        "sha256": "3e5b4c4566758f80b7ce2fe920ab654f6a6db09cacbffd36f437cb0a366b5235"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-color.png",
        "sha256": "0560b5ae453b474eb9de24f04a5693076ec295fff5932ba34c6dc280372918d0"
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
          "mg-fit-coach-intro--16x9",
          "mg-fit-coach-intro--9x16",
          "mg-fit-coach-intro--1x1"
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
            "paperNight": 24.381184895833332,
            "paperColor": 8.857801649305555,
            "region": {
              "left": 73,
              "top": 85,
              "width": 1774,
              "height": 995
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.941623263888886,
            "paperColor": 16.46478949652778,
            "region": {
              "left": 63,
              "top": 109,
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
            "paperNight": 28.263997395833332,
            "paperColor": 9.533121744791666,
            "region": {
              "left": 53,
              "top": 65,
              "width": 1027,
              "height": 1015
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
            "occupancy": 1.2057249838592847,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2064050317915234,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2064050317915234,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0865949389014868,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0877595637020243,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0877595637020243,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2665735161234135,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2665735161234135,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2665735161234135,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.748697916666667,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.797634548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-90-frame-10.png",
                "sha256": "23720a8c612ca581cf50065a007543a0cdb2f3d8a96ce853d66ee6a6a3679ede",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-90-frame-89.png",
                "sha256": "843fd19f9ec4048e58ccffbee70f091d56c1c22a3f7b877c8a49c2f2c3127993",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-90-frame-79.png",
                "sha256": "9007a0191666e82ce7c71d5e49ce9f8e2082c37c2cff7fbc8e924708edb7bd86",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.748697916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-900-frame-13.png",
                "sha256": "b69eeb50c0c14f8aac86a4ce67eadb5b5ec74bf5456c67cc5c8071a6fbfc48f0",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-900-frame-90.png",
                "sha256": "843fd19f9ec4048e58ccffbee70f091d56c1c22a3f7b877c8a49c2f2c3127993",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-900-frame-792.png",
                "sha256": "9007a0191666e82ce7c71d5e49ce9f8e2082c37c2cff7fbc8e924708edb7bd86",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/16x9-duration-900-frame-899.png",
                "sha256": "843fd19f9ec4048e58ccffbee70f091d56c1c22a3f7b877c8a49c2f2c3127993",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.347547743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-90-frame-10.png",
                "sha256": "6904fb0d5d32c62b3f04f9cd24c390f53201e5e17a9abd43b7436b03edb88823",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-90-frame-89.png",
                "sha256": "fb91a06ed3609150f3c26c02a9826466c9d85e7dc53040f9df6aaaecfe291562",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-90-frame-79.png",
                "sha256": "fb91a06ed3609150f3c26c02a9826466c9d85e7dc53040f9df6aaaecfe291562",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.335828993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-900-frame-13.png",
                "sha256": "85d2a380d1928727cb435133420af3c3f282d0693e3ff28f7446bcb9dce80a8b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-900-frame-90.png",
                "sha256": "fb91a06ed3609150f3c26c02a9826466c9d85e7dc53040f9df6aaaecfe291562",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-900-frame-792.png",
                "sha256": "fb91a06ed3609150f3c26c02a9826466c9d85e7dc53040f9df6aaaecfe291562",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/9x16-duration-900-frame-899.png",
                "sha256": "fb91a06ed3609150f3c26c02a9826466c9d85e7dc53040f9df6aaaecfe291562",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.855034722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-90-frame-10.png",
                "sha256": "ee4435ddb479110e07070640fc094b6724dc4ba6dd1e790b24d7d00519819527",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-90-frame-89.png",
                "sha256": "c717f9ffb64aec3dfc76174cd671aad4355e94b2b9586fad8836ba0526dd49b6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-90-frame-79.png",
                "sha256": "b47a766c9203a3c72e025ea98af5169386d9f92a23c32b6bc9268835893bad1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.815755208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-900-frame-13.png",
                "sha256": "ae8d67c7fc1287b112de8f661696e2562d153972631d6cba9c200e70f3673792",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-900-frame-90.png",
                "sha256": "c717f9ffb64aec3dfc76174cd671aad4355e94b2b9586fad8836ba0526dd49b6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-900-frame-792.png",
                "sha256": "16193cec963345d5617d214a57d20ad44620ae426e656d0a7bfbda4fbf5a06f3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-coach-intro/1x1-duration-900-frame-899.png",
                "sha256": "a2d4012bbc8fc024e501e034b61dce5e148358383cc1cf40737a2635dbd95b62",
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
        "note": "Coach portrait with scrolling specialty band, serif name lower third and quote; name fits in every brand."
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
      "bundleSha256": "c037a244a208dcf8c616904db53852e757526bcb255a613988404df65c09dc8d",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.085Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/16x9/detail.mp4",
      "bg": "#27180e",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "aed6807081b1b2318e286094976ef7d9a5f93b1e05a491b43fba77001d5a27a9",
        "loop": "9598cfc5376a8a6ea5afb7617fe917cf20288d7aad24c9db8ba5e3880bf0263c",
        "detail": "8f4fb1312c0ec93988e48f68c798f3f2d76e893ac7f99f64a7b93bdd5e3043f9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/9x16/detail.mp4",
      "bg": "#26180e",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "17eae6c3f7fb572f36380ded3521bc4d2466a5eac9941b87d89af6eb6e2d06a2",
        "loop": "9a1b466b8ea2b47d93651001c6f568ff1cbed0d7e6bfcedb2985be6d54afa87f",
        "detail": "ec840711fd527d05eaa202a1d2e4836aebecc7e2e9206b1ccf0270e4eba881f5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-coach-intro/1x1/detail.mp4",
      "bg": "#26180e",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "eaa05e9f767f7da932f5259ab100ca129288a8244ff344eaf9422f2779fd7358",
        "loop": "d1d9a8cb4678a767e61a125b5b6f7a8efb1a0b6b0b6c071b312f747b26702d05",
        "detail": "d864fb795492c91e6194ee62aa898bbc53e19c2aef8dfc3b6158633e4453d854"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c037a244a208dcf8c616904db53852e757526bcb255a613988404df65c09dc8d/index.mjs",
    "sha256": "c037a244a208dcf8c616904db53852e757526bcb255a613988404df65c09dc8d",
    "bytes": 172157,
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
    "at": "2026-10-09T07:11:57.757Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
