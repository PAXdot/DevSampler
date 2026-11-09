// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "product-ui",
  "mechanic": [
    "pin-drop-on-map-with-hours"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "pin-drop-on-map-with-hours",
    "beauty",
    "salon",
    "map",
    "end-card"
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
      "key": "place",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "address",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 18,
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
      "target": "pin-drop-on-map-with-hours",
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
    "ink": "#F2EBDD",
    "accent": "#D8B26E",
    "secondary": "#3E9A62",
    "paper": "#1E2D25",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "place": "Velline Studio",
    "kicker": "visit the studio",
    "address": "14 Linden Row",
    "cta": "Book a visit"
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
      "key": "place",
      "label": "Place",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "address",
      "label": "Address",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 18,
      "role": "cta"
    }
  ],
  "name": "Map Pin Location Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-location-cta",
    "bundleSha256": "6f83770c379ceae3297092f0292c8101324b3d5a3ed91a522eb9f00d693af7c9",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:28:11.017Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-paper.png",
        "sha256": "50703cf0bb002fb3aea1676104f1bda2f0074cea62aa58c82b712cabe0cc9174"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-night.png",
        "sha256": "1858ad01537e077f4c77055ef3d11ea1f99d7306ea7ce2f55c7b3aff26014381"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-color.png",
        "sha256": "08283d662fdf14cfcf1043eef419385f088f38c7ad971eb48312683df030dc58"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-paper.png",
        "sha256": "cefb8699851c52dc0eee54fbefc30bbdf1e6451f8d26a6dc93d9b7e2cf1fb370"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-night.png",
        "sha256": "578a5d582e3da663daa34f626ed594ae3c1c20b4fe8e8be190ceee9a118cd627"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-color.png",
        "sha256": "151d13b469631218de05f39298ce1a5e349b4054fc8502b7a9be8e0a2ce301de"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-paper.png",
        "sha256": "f32dfdbe83439602231dfb6201f1e839c72b6388e7edfe1c1ddd4705c4648c00"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-night.png",
        "sha256": "c402ee63555f495dd28fe1245bb87ee2ab93498b5fc6dde5ce3234f56b3acd52"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-color.png",
        "sha256": "e9e7ca68d9216bd5bd0c6efcfab4b58733b4a3df1beef9404afb882da615ce94"
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
          "mg-beauty-location-cta--16x9",
          "mg-beauty-location-cta--9x16",
          "mg-beauty-location-cta--1x1"
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
            "paperNight": 134.94707573784723,
            "paperColor": 16.986897786458332,
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
            "paperNight": 124.67580837673611,
            "paperColor": 20.88384331597222,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 123.52650282118056,
            "paperColor": 16.34868706597222,
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 34.17534722222222,
        "frames": [
          13,
          87,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 34.18012152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-90-frame-10.png",
                "sha256": "5add4c658d5e9248cfb6bdfff13b4a90bf790d2c6f03bb341f64ce52bf9a2cac",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-90-frame-87.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-90-frame-79.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-90-frame-89.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 34.17534722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-900-frame-13.png",
                "sha256": "ba239b4fc10b7704861a30bd4cf46c775241534f55ebfb70e7f68ee24dde5b5c",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-900-frame-87.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-900-frame-792.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/16x9-duration-900-frame-899.png",
                "sha256": "09d64422436a6c7bdca4f7b373a307981f67426e68d5d137161d856db597877b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 52.49565972222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-90-frame-10.png",
                "sha256": "2841e1498de782c90138a965ef0db58a848dd00ccec2a6e0a1c314a414b3de25",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-90-frame-87.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-90-frame-79.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-90-frame-89.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 52.49609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-900-frame-13.png",
                "sha256": "296e0a94e1e1f2f1c0697dd16cfd566a695d99e3ece8ec62abdc022d5ed2ff74",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-900-frame-87.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-900-frame-792.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/9x16-duration-900-frame-899.png",
                "sha256": "556f48c8cc4e777b44ca09ef006b8bdc34c8c7730b849da06b46e8704fc8c41f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 34.46299913194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-90-frame-10.png",
                "sha256": "bbfe1bfe40ce42693fe7b68d6fad037aad140ae23e015739cedba42c31b2c237",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-90-frame-87.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-90-frame-79.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-90-frame-89.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 34.455837673611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-900-frame-13.png",
                "sha256": "623addb69218323e90aa197b046550ca1d3b2fcb42ba4251be12f00ec6918464",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-900-frame-87.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-900-frame-792.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-location-cta/1x1-duration-900-frame-899.png",
                "sha256": "0de67b46dbe8f5fe90cb1f18c139028d214038fd2e69ba1bf35bd21a50970d3d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Map route to a studio pin beside an address card with hours and CTA; rebrands recolor map and card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6f83770c379ceae3297092f0292c8101324b3d5a3ed91a522eb9f00d693af7c9",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/16x9/detail.mp4",
      "bg": "#212f26",
      "posterFrame": 87,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ff642224214f2cd14bb393f590bd174da75727745e47625e99fc88b88965c0e6",
        "loop": "3b189c07d007afd525a01964352e1198e78313b6b777d74c6e86c7072940b960",
        "detail": "41a6577b817d9f23aa876689d8e82bcbe81cfabbacafba568205120c6ff7912b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/9x16/detail.mp4",
      "bg": "#25342b",
      "posterFrame": 87,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "61ec39987e586a3d352158d3d741c7ce6f185d911d03eef17f09c8f17c58ac42",
        "loop": "f1b563da18dad34752dbf2b4d7b8a78a4255e25fa80d4732232d19b575afd9d8",
        "detail": "7703f3719c03df349f164736470a19e2ec05a9eaf3f6bb10ba8b503fb30d0c4a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-location-cta/1x1/detail.mp4",
      "bg": "#25342b",
      "posterFrame": 87,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f1d0f78df17b2949ac713adb1163b4d63e2bda15ef17854b62e3386ecf9021e4",
        "loop": "09c6db15ef2ce65c2454f7a54a9d996afd2e2dc089aab27f5aa98fc83fae6c3c",
        "detail": "be6c31d07694f0bf9823318dabe154b16174a4721932a54f39e479685f1ab998"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6f83770c379ceae3297092f0292c8101324b3d5a3ed91a522eb9f00d693af7c9/index.mjs",
    "sha256": "6f83770c379ceae3297092f0292c8101324b3d5a3ed91a522eb9f00d693af7c9",
    "bytes": 253012,
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
    "at": "2026-10-09T07:11:18.867Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
