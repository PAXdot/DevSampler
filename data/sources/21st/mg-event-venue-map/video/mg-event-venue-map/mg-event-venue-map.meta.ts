// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "isometric",
  "mechanic": [
    "floorplan-tilt-route-walk"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "floorplan-tilt-route-walk",
    "venue",
    "map",
    "floor-plan",
    "event"
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
      "in": 138,
      "out": 0
    },
    "markers": {
      "settled": 138
    },
    "beats": [
      0,
      35,
      69,
      104,
      138
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
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "address",
      "type": "text",
      "maxChars": 30,
      "role": "label"
    },
    {
      "key": "kicker",
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
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "floorplan-tilt-route-walk",
      "prop": "transform",
      "from": "enter",
      "settledBy": 138,
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
    "ink": "#121826",
    "accent": "#FF6A4D",
    "secondary": "#7B61FF",
    "paper": "#EEF2F7",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Riverside Hall",
    "address": "Doca Norte 7, Lisbon",
    "kicker": "Meridian 26 · Venue"
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "address",
      "label": "Address",
      "type": "text",
      "max": 30,
      "role": "label"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    }
  ],
  "name": "Venue Floor Plan",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-venue-map",
    "bundleSha256": "97dcb7bd4df023417c2260c3883fd31e5e81fd4cb75ba3f6c8edd2bfb1dc9c41",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:49:20.264Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-paper.png",
        "sha256": "23ba619ef500c9f3a821ed79b2b2954248942c3660b7aaf693faa43cab88456b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-night.png",
        "sha256": "b6c5e3b569bccfb8f1d2d6bdc87057f774e91252c96099f2a5450cf95d0a1172"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-color.png",
        "sha256": "d0eaebf9ca9bbc960d30ee0fb456951cce2645acf509984a9a2ca733e92c5cc3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-paper.png",
        "sha256": "c34dcd5dd24f6530aca2cb513ad3fb6bdca5ac5cac7d0fcf6c2f92091e1c8115"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-night.png",
        "sha256": "287c9e44831a1fa860638446238fbd21d6f06aeb5fca9a166570d8c4f8ec420e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-color.png",
        "sha256": "ea5570e053c6ba25e18f852989ca0d4345c9c2e528a4232cf9f51323d0d85fcf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-paper.png",
        "sha256": "d143459d5cc78a622b01ff0b8574c1a8618878fc2d498472cb69d39d04b2febd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-night.png",
        "sha256": "7d44810e67a8a113cf6fba44bc6772f03fdd44843bea2fcb3fdff7b402bcaeea"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-color.png",
        "sha256": "575f7933eebd9455257f6f5815a8daf9e77a092c8ba7694d2c30b973991692c0"
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
          "mg-event-venue-map--16x9",
          "mg-event-venue-map--9x16",
          "mg-event-venue-map--1x1"
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
            "paperNight": 36.34437391493056,
            "paperColor": 9.409261067708334,
            "region": {
              "left": 94,
              "top": 97,
              "width": 1784,
              "height": 895
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 44.178466796875,
            "paperColor": 12.163926866319445,
            "region": {
              "left": 76,
              "top": 94,
              "width": 977,
              "height": 1736
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 34.510525173611114,
            "paperColor": 9.055528428819445,
            "region": {
              "left": 63,
              "top": 66,
              "width": 945,
              "height": 954
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
            "occupancy": 1.0900560069706897,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0900560069706897,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0912753089919098,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1592062879678624,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1592062879678624,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1558675601799364,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0954034391534393,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0954034391534393,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0954034391534393,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.732313368055555,
        "frames": [
          20,
          138,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.748155381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-90-frame-10.png",
                "sha256": "5bec6bbd6c31e59ca47a5cc89e0aa8efaa32df1ff0ac440b09ee4a4e953520f6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-90-frame-89.png",
                "sha256": "65c8b54847068f2f29b8e6e6d3ae7d0fa1ffc03b8c01f6aa347eb8bec9c2b8a0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-90-frame-79.png",
                "sha256": "65c8b54847068f2f29b8e6e6d3ae7d0fa1ffc03b8c01f6aa347eb8bec9c2b8a0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.732313368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-900-frame-20.png",
                "sha256": "f0f64a2455df1dbaa5b8d5fce62cc5e014d3c27c3bfe1ea2ae744ed3e6f26b70",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-900-frame-138.png",
                "sha256": "65c8b54847068f2f29b8e6e6d3ae7d0fa1ffc03b8c01f6aa347eb8bec9c2b8a0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-900-frame-792.png",
                "sha256": "65c8b54847068f2f29b8e6e6d3ae7d0fa1ffc03b8c01f6aa347eb8bec9c2b8a0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/16x9-duration-900-frame-899.png",
                "sha256": "65c8b54847068f2f29b8e6e6d3ae7d0fa1ffc03b8c01f6aa347eb8bec9c2b8a0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.529839409722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-90-frame-10.png",
                "sha256": "7e25ee9dcc05df395d7f74f8a12e3e7608c06c6a0c896c8a7a6b5d1d669468b7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-90-frame-89.png",
                "sha256": "a5d80d20663b6c9e632c21e0c8bc84b796bf177e290b7b229483a5f66a011936",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-90-frame-79.png",
                "sha256": "08185b9502099c6532a705cda3fd9520c1fbf7c6c4f83c5ca54898a6e351238b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.425672743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-900-frame-20.png",
                "sha256": "d0ff30dee3192df57a61b586aacb67e2673df06804a194e81151cd8b802d1ff4",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-900-frame-138.png",
                "sha256": "08185b9502099c6532a705cda3fd9520c1fbf7c6c4f83c5ca54898a6e351238b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-900-frame-792.png",
                "sha256": "08185b9502099c6532a705cda3fd9520c1fbf7c6c4f83c5ca54898a6e351238b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/9x16-duration-900-frame-899.png",
                "sha256": "08185b9502099c6532a705cda3fd9520c1fbf7c6c4f83c5ca54898a6e351238b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.901041666666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-90-frame-10.png",
                "sha256": "2eb3db637b150f608492b34eddc3e1fd17569ce64d469dc177615bc85f2b7eaa",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-90-frame-89.png",
                "sha256": "7f290b60fc549d6bc396cf9773df849e933f683d90b63caa92b0fbeefeeb7537",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-90-frame-79.png",
                "sha256": "7f290b60fc549d6bc396cf9773df849e933f683d90b63caa92b0fbeefeeb7537",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.869574652777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-900-frame-20.png",
                "sha256": "989083f760b96401d70fbe0ed32b846106408a24c87ec533d85411e2f004aee5",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-900-frame-138.png",
                "sha256": "7f290b60fc549d6bc396cf9773df849e933f683d90b63caa92b0fbeefeeb7537",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-900-frame-792.png",
                "sha256": "7f290b60fc549d6bc396cf9773df849e933f683d90b63caa92b0fbeefeeb7537",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-venue-map/1x1-duration-900-frame-899.png",
                "sha256": "7f290b60fc549d6bc396cf9773df849e933f683d90b63caa92b0fbeefeeb7537",
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
        "note": "Isometric venue floor plan with room legend and session pins; rebrands recolor rooms."
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
      "bundleSha256": "97dcb7bd4df023417c2260c3883fd31e5e81fd4cb75ba3f6c8edd2bfb1dc9c41",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.095Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-venue-map/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-venue-map/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-venue-map/16x9/detail.mp4",
      "bg": "#eef2f7",
      "posterFrame": 138,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f158ef2ea94c82c8e1a0bd8b9f6bd635702edd4c73125d241f4441a58b114136",
        "loop": "3b44f07e4c24f8884fabd3eb4b792f1c01de415bb2777a3cfdff897c151b5f1d",
        "detail": "3b10ce5232774d826333d9eebe5c5a532e2c03ffaeac9226bef978b825669033"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-venue-map/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-venue-map/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-venue-map/9x16/detail.mp4",
      "bg": "#eef2f7",
      "posterFrame": 138,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "09eadcd5ecf2e23d6ba61ef780386ae0ef372d65d165d9e2ba13ec19f3d311b1",
        "loop": "10c960b130e8edace685ba63a3fbe321f5fdae53f863fdb93867a89acdb1a042",
        "detail": "e1458a808e63b1f7cd8d7c5fd56a3d7d8e71db79576dc50c7646568e90747758"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-venue-map/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-venue-map/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-venue-map/1x1/detail.mp4",
      "bg": "#eef2f7",
      "posterFrame": 138,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7898cf5f378b2bbd6374bc2a5b8b6da5930c73d5014c56d61e615a985ab06af5",
        "loop": "c523cac5feea957de0a0c02695f5b69a7d021fbd9d7b743058569d600c2aede8",
        "detail": "694b18e5fc270b6f3b26e40ea140ad9f7d06afafc742cc6f2d40481e44fed844"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/97dcb7bd4df023417c2260c3883fd31e5e81fd4cb75ba3f6c8edd2bfb1dc9c41/index.mjs",
    "sha256": "97dcb7bd4df023417c2260c3883fd31e5e81fd4cb75ba3f6c8edd2bfb1dc9c41",
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
    "at": "2026-10-09T07:18:22.493Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
