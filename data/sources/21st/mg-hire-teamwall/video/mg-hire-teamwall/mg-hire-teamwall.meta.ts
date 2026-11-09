// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "editorial",
  "mechanic": [
    "avatar-wall-iris-with-open-seat"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "avatar-wall-iris-with-open-seat",
    "hiring",
    "team",
    "headcount",
    "culture"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "count",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "unit",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 48,
      "role": "body"
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
      "target": "avatar-wall-iris-with-open-seat",
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
    "ink": "#1D1A17",
    "accent": "#FF5B2E",
    "secondary": "#7457D9",
    "paper": "#FFFCF6",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "The Wayfold team",
    "count": "142",
    "unit": "people",
    "sub": "building one product from nine hubs."
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "unit",
      "label": "Unit",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 48,
      "role": "body"
    }
  ],
  "name": "Team Wall Open Seat",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-teamwall",
    "bundleSha256": "c30d68ec24cc2e2fe763c81ac8743bf1b51b4538b159ce699c2aad52f95a88db",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:01:38.596Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-paper.png",
        "sha256": "01da1fb4805995e0bf153c221e0ad67ab525447c6d442681ab1289afcedc615b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-night.png",
        "sha256": "f8834049fb3cddf21aceed0fa3ef8208791b5589f48b3d8e5fe5d66fdbf42416"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-color.png",
        "sha256": "3ec7ac96730cfd64a14f0ca16d51abd00e3e4bb3b1fe04e6a526393e430a905c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-paper.png",
        "sha256": "723adf4a3bb109eee14d0ac92ddbc4ab94db4db36fb13af22fba654990761074"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-night.png",
        "sha256": "d753f016ca62537b140656b16c478585810ae7b44b2db640c8ea753c6ec451f2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-color.png",
        "sha256": "a6fcb3556d20696915498a5d378e3079152970e25b88586abb6b9cd1b8ead38a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-paper.png",
        "sha256": "4d45774cc7e5b1f0dbf5dc0ab3056d088c9841db8efe0c6c5cbfbce2abf20039"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-night.png",
        "sha256": "54876ebba4d5189b425971fb0c9012deae4d94b6b88a4646e8e44f4af34da058"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-color.png",
        "sha256": "1f57110775bb0bbaef1f3b5d9060a551bfe160e5723b2a74bc84149729fdd954"
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
          "mg-hire-teamwall--16x9",
          "mg-hire-teamwall--9x16",
          "mg-hire-teamwall--1x1"
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
            "paperNight": 70.34228515625,
            "paperColor": 7.421413845486111,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1078
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 103.84353298611111,
            "paperColor": 13.302978515625,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1048,
              "height": 1901
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 79.46812608506944,
            "paperColor": 8.833550347222221,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
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
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3616322943786572,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3616322943786572,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3616322943786572,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.125325520833332,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 18.061414930555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-90-frame-10.png",
                "sha256": "1f11f8ab07e7382174c6c5e56c7ec155ebde2eb6a3ecaf680d0f100ef3bfad6e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-90-frame-89.png",
                "sha256": "70ce8739402e9a52a3d87dc192b4bacae991d307da7948476e9b6cce83f90e5b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-90-frame-79.png",
                "sha256": "70ce8739402e9a52a3d87dc192b4bacae991d307da7948476e9b6cce83f90e5b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 18.125325520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-900-frame-14.png",
                "sha256": "5e681c922c50fa557b02e3c112ca7316a95491fbbee7c5d4150c2cb04a60a66a",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-900-frame-96.png",
                "sha256": "70ce8739402e9a52a3d87dc192b4bacae991d307da7948476e9b6cce83f90e5b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-900-frame-792.png",
                "sha256": "70ce8739402e9a52a3d87dc192b4bacae991d307da7948476e9b6cce83f90e5b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/16x9-duration-900-frame-899.png",
                "sha256": "70ce8739402e9a52a3d87dc192b4bacae991d307da7948476e9b6cce83f90e5b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 18.2705078125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-90-frame-10.png",
                "sha256": "841be585c5f34f68c6fa207b0e28641eac87d1cd6f5a99dd4cb557df1c7255a9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-90-frame-89.png",
                "sha256": "f8c88c12a634c7dd69ef5a4fde18ee14311d39ed87ae3b0049c96d0e9c3bd42d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-90-frame-79.png",
                "sha256": "f8c88c12a634c7dd69ef5a4fde18ee14311d39ed87ae3b0049c96d0e9c3bd42d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 18.22113715277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-900-frame-14.png",
                "sha256": "fcd104e2bec82ceff65db3dd2a6d6613185007842474a9b784f26bbb3a1c6de9",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-900-frame-96.png",
                "sha256": "f8c88c12a634c7dd69ef5a4fde18ee14311d39ed87ae3b0049c96d0e9c3bd42d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-900-frame-792.png",
                "sha256": "f8c88c12a634c7dd69ef5a4fde18ee14311d39ed87ae3b0049c96d0e9c3bd42d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/9x16-duration-900-frame-899.png",
                "sha256": "f8c88c12a634c7dd69ef5a4fde18ee14311d39ed87ae3b0049c96d0e9c3bd42d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 20.127604166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-90-frame-10.png",
                "sha256": "f9f84f096cbd2a4d98b4819990bbd028aef37043779d3b14ade8b36d214f7b6a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-90-frame-89.png",
                "sha256": "2e1b4579d6255d21216d3dc0c6dfe27c905e12dbe16912a9ba69f586b166231c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-90-frame-79.png",
                "sha256": "2e1b4579d6255d21216d3dc0c6dfe27c905e12dbe16912a9ba69f586b166231c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 20.140733506944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-900-frame-14.png",
                "sha256": "2e418643e6b9a3996945100a7c3d538eab44fb330705316e761af68e51773d72",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-900-frame-96.png",
                "sha256": "2e1b4579d6255d21216d3dc0c6dfe27c905e12dbe16912a9ba69f586b166231c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-900-frame-792.png",
                "sha256": "2e1b4579d6255d21216d3dc0c6dfe27c905e12dbe16912a9ba69f586b166231c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-teamwall/1x1-duration-900-frame-899.png",
                "sha256": "2e1b4579d6255d21216d3dc0c6dfe27c905e12dbe16912a9ba69f586b166231c",
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
        "note": "Team avatar wall with an open seat and a headcount card; rebrands recolor the card."
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
      "bundleSha256": "c30d68ec24cc2e2fe763c81ac8743bf1b51b4538b159ce699c2aad52f95a88db",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.090Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/16x9/detail.mp4",
      "bg": "#e8e5e0",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ec63895783ca4a47812f81f15ecdca6b65b82332e6dc1e167299c7d64a37bb01",
        "loop": "4a7f9dc958efdc090c829bd6fa248b8ee1014eb7235197b66993a137a9abc491",
        "detail": "b92411ea1bfedf1ea9c8b0c90fa616edc1a26742082c2ae6d7bb7effe0ad1880"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/9x16/detail.mp4",
      "bg": "#eee7fd",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7bb2668ebd568b4c127ae2d54c3dc4ab5707e2d8ec519313c22b4b55c785f09a",
        "loop": "942c0c7743f782643216652943f77bd8ca4ab4923778e289e5f1e7d5a22f78d4",
        "detail": "410517593b8a3e6f9f05e74ccd3b5a221e75f0b9e143d7eb65258444086caaba"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-teamwall/1x1/detail.mp4",
      "bg": "#9f8ae3",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8b04f835bd8e1946586198ebea6b2b17d8d113b2e0935603480bb15738b9ac88",
        "loop": "3f52834c969d6062b014547cfde3d77dd0f573ae1c08ef309524032a975d9399",
        "detail": "9436e48aa63217bcbbba39496eb8cd9101c69da5e1a69018983971ed6125f015"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c30d68ec24cc2e2fe763c81ac8743bf1b51b4538b159ce699c2aad52f95a88db/index.mjs",
    "sha256": "c30d68ec24cc2e2fe763c81ac8743bf1b51b4538b159ce699c2aad52f95a88db",
    "bytes": 196035,
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
    "at": "2026-10-09T07:15:11.211Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
