// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "glass",
  "mechanic": [
    "vinyl-slides-out-and-spins"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "vinyl-slides-out-and-spins",
    "music",
    "album",
    "release",
    "vinyl"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "artist",
      "type": "text",
      "maxChars": 24,
      "role": "name"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 16,
      "role": "cta"
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
      "target": "vinyl-slides-out-and-spins",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#1B1446",
    "accent": "#6B4DFF",
    "secondary": "#FF4FA3",
    "paper": "#D9D3FF",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "New album · out Friday",
    "title": "Glass Weather",
    "artist": "Juno Vale",
    "cta": "Pre-save"
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
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "artist",
      "label": "Artist",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 16,
      "role": "cta"
    }
  ],
  "name": "Vinyl Album Drop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-vinyl-drop",
    "bundleSha256": "816fbf775e7474bc24b7c63ab7d647c5677df7fff9351ef96136977b76ee1724",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:29.288Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-paper.png",
        "sha256": "2da5f1bb72458e5a812907d59018a5ffbae9b8bf3fcc2bdfa8aaa1d986259986"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-night.png",
        "sha256": "d18b99097703af4d9fdb7296c3a563fab34da5e7a55413f97a75271d37841947"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-color.png",
        "sha256": "360dad7175453ea2a97321f29e3670950055e58138e0b5744b5b3edcd748ce8f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-paper.png",
        "sha256": "40ff3ff1649ba84f75f09c342d305da0e2001b0547e2b5a039f9b47e2a95044f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-night.png",
        "sha256": "ba26ec700cb1a887ff5146dffe6946c730a5d95bf2b337c7f6f5ee7f0acb7ddc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-color.png",
        "sha256": "be36e4c98e5eeff27393cdccd3e6cafa89d3a5a7a0975d0dbc437f2c1a63bb3d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-paper.png",
        "sha256": "b51eb5681a54e791ff4df14ffac2e8ee1164f933b6fd32b817eab525ed1183ce"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-night.png",
        "sha256": "a9018123a1b8f1110259f6c2e385b8e0df7098126132c080ec8e258a7e7215eb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-color.png",
        "sha256": "da3f84fd325291bbe5646a6e1d4465ded58d3b62403d22183f80e9e2923a667d"
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
          "mg-audio-vinyl-drop--16x9",
          "mg-audio-vinyl-drop--9x16",
          "mg-audio-vinyl-drop--1x1"
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
            "paperNight": 27.803141276041668,
            "paperColor": 10.084065755208334,
            "region": {
              "left": 35,
              "top": 119,
              "width": 1795,
              "height": 876
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 36.882568359375,
            "paperColor": 14.16330295138889,
            "region": {
              "left": 28,
              "top": 125,
              "width": 1025,
              "height": 1658
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.872205946180557,
            "paperColor": 8.68649631076389,
            "region": {
              "left": 37,
              "top": 86,
              "width": 983,
              "height": 917
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
            "occupancy": 1.074694441819938,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.074694441819938,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.074694441819938,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1615150336111812,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.152449550422021,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.153582735820666,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0952588482809678,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.094064454771392,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0928700612618163,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.28786892361111,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 22.73198784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-90-frame-10.png",
                "sha256": "dbe8a11545f8c709fe3622cb3539302602974cb13b8a686b2bc488bb62b9f88f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-90-frame-89.png",
                "sha256": "b28ec6ff23429dabb7993b778117756d8fb141b1855217f79125913cef97f8be",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-90-frame-79.png",
                "sha256": "b28ec6ff23429dabb7993b778117756d8fb141b1855217f79125913cef97f8be",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 22.28786892361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-900-frame-15.png",
                "sha256": "687664893f94fd32e1b82ba5dde67715b5080be79fd4070fb0179226eaab8e4d",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-900-frame-102.png",
                "sha256": "b28ec6ff23429dabb7993b778117756d8fb141b1855217f79125913cef97f8be",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-900-frame-792.png",
                "sha256": "b28ec6ff23429dabb7993b778117756d8fb141b1855217f79125913cef97f8be",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/16x9-duration-900-frame-899.png",
                "sha256": "b28ec6ff23429dabb7993b778117756d8fb141b1855217f79125913cef97f8be",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.0048828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-90-frame-10.png",
                "sha256": "0f61d2c082fbea0c367a8b4a3b40c7253086796b5a01aa08c5c670a791a4f810",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-90-frame-89.png",
                "sha256": "6f6c0b19f0810c7aca8e191a9975c97c6457d2913dbf0600f7db48571b2958ea",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-90-frame-79.png",
                "sha256": "6f6c0b19f0810c7aca8e191a9975c97c6457d2913dbf0600f7db48571b2958ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 23.65277777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-900-frame-15.png",
                "sha256": "d62527609620d5dc7ad57ae33717b3998743979607fa734ccaca6a85d89c21ca",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-900-frame-102.png",
                "sha256": "6f6c0b19f0810c7aca8e191a9975c97c6457d2913dbf0600f7db48571b2958ea",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-900-frame-792.png",
                "sha256": "6f6c0b19f0810c7aca8e191a9975c97c6457d2913dbf0600f7db48571b2958ea",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/9x16-duration-900-frame-899.png",
                "sha256": "6f6c0b19f0810c7aca8e191a9975c97c6457d2913dbf0600f7db48571b2958ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 19.594401041666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-90-frame-10.png",
                "sha256": "1f72e75295c581972474207396badda84101aec7f74d11afd67d90218b986870",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-90-frame-89.png",
                "sha256": "c1d138c4a712473307be6a19361855e633927d7943a893042381cbb5db467f2b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-90-frame-79.png",
                "sha256": "2f31291ca031f7fcfc32edb253182a7c26d44388c8c93139840913e5e5974a6e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 19.21657986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-900-frame-15.png",
                "sha256": "c3aeb7a8f5d97ed1847ee88d036aae27d8dbaea3d2daa3e7438f03614df92265",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-900-frame-102.png",
                "sha256": "c1d138c4a712473307be6a19361855e633927d7943a893042381cbb5db467f2b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-900-frame-792.png",
                "sha256": "c1d138c4a712473307be6a19361855e633927d7943a893042381cbb5db467f2b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-vinyl-drop/1x1-duration-900-frame-899.png",
                "sha256": "c1d138c4a712473307be6a19361855e633927d7943a893042381cbb5db467f2b",
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
        "note": "Album sleeve and vinyl slide out beside the title, tracklist and pre-save; rebrands distinct."
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
      "bundleSha256": "816fbf775e7474bc24b7c63ab7d647c5677df7fff9351ef96136977b76ee1724",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/16x9/detail.mp4",
      "bg": "#dcd6ff",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "151d38ea7f47742709d727d6bc6ea0f6defca4e40dc6ef7eef2c4d29147056e6",
        "loop": "d10fa1b0cd7b3202e86dba590a59afa938635599b940848682a2b8cc89e3d3db",
        "detail": "3131aae26e7a86fa2fdfbe5a394670dbc03f7e18fa17c28dbc417b75f2eca3cb"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/9x16/detail.mp4",
      "bg": "#dcd6ff",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c59dde2b2380a46de567c51ae60bc44dc5878236200c9be9fad6fb03876a8af2",
        "loop": "f8f812e99532c2f0721fde74598ec6840cc6d51df66a868fa0bb786cb864191a",
        "detail": "bcb054c9a58155c7574d0d8bbd4234001586a23d90bfe7d4f30d0807774ef529"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-vinyl-drop/1x1/detail.mp4",
      "bg": "#dcd6ff",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "12bd87e55121381a57a64ada6b1042f0d50c899adaad5ba4c64c0767edab936f",
        "loop": "d4fc662fa4e038d858906e12c17e80bf249d7230cd3aa00f787b9924cd724389",
        "detail": "aaaa922045e90299fe4eaae28c1ba76c7a0cfeed820f5b343f4322c9894b1829"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/816fbf775e7474bc24b7c63ab7d647c5677df7fff9351ef96136977b76ee1724/index.mjs",
    "sha256": "816fbf775e7474bc24b7c63ab7d647c5677df7fff9351ef96136977b76ee1724",
    "bytes": 259443,
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
    "at": "2026-10-09T07:09:21.965Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
