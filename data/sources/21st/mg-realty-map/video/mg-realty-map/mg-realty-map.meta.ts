// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "map-pin-drop-poi-pop"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "map-pin-drop-poi-pop",
    "real-estate",
    "map",
    "neighbourhood"
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
      "key": "address",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 32,
      "role": "body"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 18,
      "role": "caption"
    },
    {
      "key": "score",
      "type": "text",
      "maxChars": 3,
      "role": "value"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "map-pin-drop-poi-pop",
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
    "ink": "#1D2A25",
    "accent": "#1F3D33",
    "secondary": "#7FA58F",
    "paper": "#F2EEE6",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "address": "14 Larch Lane",
    "sub": "Fernhill · 3 bed townhouse",
    "note": "Sunday market!",
    "score": "92"
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
      "brand": "fonts.accent"
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
      "key": "address",
      "label": "Address",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 18,
      "role": "caption"
    },
    {
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 3,
      "role": "value"
    }
  ],
  "name": "Neighbourhood Map Pin",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-map",
    "bundleSha256": "179b601503844c3fce793dcfd3c00f9ba70560f551f1e5ca67ee71067b9569df",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:20:52.053Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-paper.png",
        "sha256": "63e8a5652f8f3046686fe9bf2e0805f4cf1f564828307ea58857b2db4db52833"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-night.png",
        "sha256": "4f368bd35e58259856b3a7fadc70941a5d886373bbe8bbb7544d4cb010b92559"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-color.png",
        "sha256": "5700df42636aad749de4ab8a0316282d462b3ae05116f3322446462af4700a33"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-paper.png",
        "sha256": "d5c7996e73fda51ba0a02502bbcf24d62ea8317c084f344850694e6cc40c5cfa"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-night.png",
        "sha256": "8620731001c4bcd2db8f23490231d491cd8141a64f3b804712e37b0896e57449"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-color.png",
        "sha256": "a0eb0575f53894c455514c7eda9cb7b0d1f796ff70787af2a27fc3961574d688"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-paper.png",
        "sha256": "28ffcb30af9a8afea0899892c1e1617c2ecfaf953955c3e022219ef823658007"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-night.png",
        "sha256": "7ca93c75bb4ed3a976ddd4197349fb28df6023a011e825d426605530e15a8400"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-color.png",
        "sha256": "15742c281ffee4da7fa8970da373a7ddfecb935a7905ab8c3dfde0c244d9aa9a"
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
          "mg-realty-map--16x9",
          "mg-realty-map--9x16",
          "mg-realty-map--1x1"
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
            "paperNight": 133.50157335069446,
            "paperColor": 10.504638671875,
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
            "paperNight": 118.75358072916667,
            "paperColor": 12.269612630208334,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1842
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 129.95426432291666,
            "paperColor": 10.737494574652779,
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
            "occupancy": 1.3567058767951627,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3567058767951627,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3596584467120185,
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
        "averageChannelDifference": 7.6328125,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.823133680555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-90-frame-10.png",
                "sha256": "ade2a34e8ba3e918697051fef0c3e04d0fc5b8f24144342c1bb54826f1adfcfe",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-90-frame-89.png",
                "sha256": "854aa679b5e8de12832b46c03d91857bfa9e7b6c19875f6a79d76a6e73afeb68",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-90-frame-79.png",
                "sha256": "50f6d53dbf2f03ffd685a1fb7f354eb65f60601dc4e25ef0cfe5fac236c02fed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.6328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-900-frame-13.png",
                "sha256": "8017b1a1e70227210ce276c211233aee7677fdfc8b069da8117bf4f76054c3e0",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-900-frame-90.png",
                "sha256": "854aa679b5e8de12832b46c03d91857bfa9e7b6c19875f6a79d76a6e73afeb68",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-900-frame-792.png",
                "sha256": "854aa679b5e8de12832b46c03d91857bfa9e7b6c19875f6a79d76a6e73afeb68",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/16x9-duration-900-frame-899.png",
                "sha256": "50f6d53dbf2f03ffd685a1fb7f354eb65f60601dc4e25ef0cfe5fac236c02fed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 10.02756076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-90-frame-10.png",
                "sha256": "a9ce04259be7b59576d5e4e1c64684fe3a58b544450950a8e36b0459c8958dab",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-90-frame-89.png",
                "sha256": "c6b47829a7039f799fd4c784d3323ed6e5cdcbb4033d096c86362e4fad49564b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-90-frame-79.png",
                "sha256": "c6b47829a7039f799fd4c784d3323ed6e5cdcbb4033d096c86362e4fad49564b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.890299479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-900-frame-13.png",
                "sha256": "8a6e9db0a39761fdd998db2440176e1045ebf167b0d22e67678552d456d497bf",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-900-frame-90.png",
                "sha256": "c6b47829a7039f799fd4c784d3323ed6e5cdcbb4033d096c86362e4fad49564b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-900-frame-792.png",
                "sha256": "c6b47829a7039f799fd4c784d3323ed6e5cdcbb4033d096c86362e4fad49564b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/9x16-duration-900-frame-899.png",
                "sha256": "c6b47829a7039f799fd4c784d3323ed6e5cdcbb4033d096c86362e4fad49564b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.7138671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-90-frame-10.png",
                "sha256": "eb9169c1671c634f18e8bd2c725bdc8bf4441ce509486fdb24c04b9dc4bde5f9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-90-frame-89.png",
                "sha256": "bd8ccb074f655fded6de5a4a0e32c6938e574f83ec43ddd6fb90122d65fd00e9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-90-frame-79.png",
                "sha256": "bd8ccb074f655fded6de5a4a0e32c6938e574f83ec43ddd6fb90122d65fd00e9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.469401041666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-900-frame-13.png",
                "sha256": "290fe8ae89b5ba8dddb3d7a666b67c11832d252fab2e04ad624108d0d2d3a74a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-900-frame-90.png",
                "sha256": "bd8ccb074f655fded6de5a4a0e32c6938e574f83ec43ddd6fb90122d65fd00e9",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-900-frame-792.png",
                "sha256": "bd8ccb074f655fded6de5a4a0e32c6938e574f83ec43ddd6fb90122d65fd00e9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-realty-map/1x1-duration-900-frame-899.png",
                "sha256": "7edf46ae1f88039c08fd82e5be53b01fb98b7b6dae7f24cdf1268237a6e2a841",
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
        "note": "Neighbourhood map drops a home pin with walk-time card and handwritten note; rebrands recolor map."
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
      "bundleSha256": "179b601503844c3fce793dcfd3c00f9ba70560f551f1e5ca67ee71067b9569df",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.079Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-map/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-map/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-map/16x9/detail.mp4",
      "bg": "#f2eee6",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dd69899381f53ba7178268ee8cd1e8ec9ddf4bcff1df9e37f53f2a9234e8e3f7",
        "loop": "0347cacac0fe2fe8b7cbe8aad80caba4c21207822d977f88e42f140ea4fe7aa3",
        "detail": "c9c3c69700926c18b1764b969f609d3a77f69b5a48baaaff23cb662d85818fb8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-map/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-map/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-map/9x16/detail.mp4",
      "bg": "#d4d3cb",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "400ccf82444759b56663d98836c58d71676b5efc8265d61bd797d3b46dd20a5a",
        "loop": "5936008783b6aed5f0c23fbc3718ccbe396e08e8160fae31644e551f51b5cba2",
        "detail": "0a47edc7975b5448e1dcb2713c497d841bbea48b15212f7212215a973e9be387"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-map/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-map/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-map/1x1/detail.mp4",
      "bg": "#f2eee6",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2adca5f2c1d540ae636845bd4512274cfb31e49f1951ae02a6ebe02e5ea447c0",
        "loop": "abe85717d6ede9ce0361e0900144dc6cce18a3778223898646e2326dadaeed4d",
        "detail": "25f1de7513c61d42e8ebab117d5ca8576b38383524b24370a0f96773d4ebfc62"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/179b601503844c3fce793dcfd3c00f9ba70560f551f1e5ca67ee71067b9569df/index.mjs",
    "sha256": "179b601503844c3fce793dcfd3c00f9ba70560f551f1e5ca67ee71067b9569df",
    "bytes": 179509,
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
    "at": "2026-10-09T07:07:47.590Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
