// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "cursor-picks-time-slot"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "cursor-picks-time-slot",
    "restaurant",
    "booking",
    "reservation",
    "app"
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
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 56,
      "role": "body"
    },
    {
      "key": "confirm",
      "type": "text",
      "maxChars": 36,
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
      "target": "cursor-picks-time-slot",
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
    "ink": "#F6E9DA",
    "accent": "#E3BF74",
    "secondary": "#E2553F",
    "paper": "#3A0E18",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Friday nights go fast.",
    "brand": "fennel. wine bar",
    "sub": "Book a table in two taps. Small plates until late.",
    "confirm": "Table for 2 · Fri 10 Oct · 8:30 pm"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 56,
      "role": "body"
    },
    {
      "key": "confirm",
      "label": "Confirm",
      "type": "text",
      "max": 36,
      "role": "caption"
    }
  ],
  "name": "Table Booking Slots",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-booking-slots",
    "bundleSha256": "4a6696e16851988035848ba146360091f2ef426cb68b9d0af84b15b5c90a586a",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:26.449Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-paper.png",
        "sha256": "27ffce7861d4046b0750dc08c99a1dfe878530803efbffffc91157374494a8f1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-night.png",
        "sha256": "30dfe181f41597a200d90c000361d7a9337ab2158ba854d91cdf51fe175ff5a8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-color.png",
        "sha256": "ce2f0fb72aa1be6e850a734b8efe075cdf3c82c940af854de8dd942a1fdb1cc4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-paper.png",
        "sha256": "8443e75077f8e09cd874a7d08947a1473206de0895f4feee87cf0c6de2d97cfc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-night.png",
        "sha256": "2f916c74060b12e8d7790a77aaefa569f09a2b6fd7ef31c6f5fd00f554177e12"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-color.png",
        "sha256": "8ad11253b4586604c1f50577a4fc1d4ff75ed88c67b2442bd3ff2b06511cfa93"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-paper.png",
        "sha256": "d6490804faa18890ca76b83b1763ae857b80c70decf1cecb6984072cf78f60a0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-night.png",
        "sha256": "3f38797db2cb254eb8b5ebc04665dc657d70ec0407de223a89c0f27a19f1198c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-color.png",
        "sha256": "0a59734ea9e2945e32f1813151aa0504929659280c15b37456549c39f1c35d12"
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
          "mg-food-booking-slots--16x9",
          "mg-food-booking-slots--9x16",
          "mg-food-booking-slots--1x1"
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
            "paperNight": 54.438069661458336,
            "paperColor": 11.70559353298611,
            "region": {
              "left": 84,
              "top": 142,
              "width": 1786,
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
            "paperNight": 66.01296657986111,
            "paperColor": 17.00566948784722,
            "region": {
              "left": 0,
              "top": 134,
              "width": 1080,
              "height": 1786
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 46.24102105034722,
            "paperColor": 10.364854600694445,
            "region": {
              "left": 34,
              "top": 70,
              "width": 1031,
              "height": 1010
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
            "occupancy": 1.092498711804681,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.092498711804681,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.092498711804681,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3183224678760397,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3183224678760397,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3183224678760397,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2652430370868057,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2652430370868057,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2652430370868057,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.836046006944445,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.84375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-90-frame-10.png",
                "sha256": "507531daf382219b3822a1fb79c35bace08c1bfec1dfe10563f41deeb3496997",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-90-frame-89.png",
                "sha256": "d5dcc814e72fcd600782653922aaca8b3334ae5af57dd401fd85e20f44698296",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-90-frame-79.png",
                "sha256": "d5dcc814e72fcd600782653922aaca8b3334ae5af57dd401fd85e20f44698296",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.836046006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-900-frame-15.png",
                "sha256": "22ae355379cc3c7a7df176fb21e75e632747dd4ae71bb5b7ffdd4c8919ae3127",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-900-frame-102.png",
                "sha256": "d5dcc814e72fcd600782653922aaca8b3334ae5af57dd401fd85e20f44698296",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-900-frame-792.png",
                "sha256": "d5dcc814e72fcd600782653922aaca8b3334ae5af57dd401fd85e20f44698296",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/16x9-duration-900-frame-899.png",
                "sha256": "d5dcc814e72fcd600782653922aaca8b3334ae5af57dd401fd85e20f44698296",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 20.794270833333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-90-frame-10.png",
                "sha256": "882ab485d887c2ac2f9c21a824481ebf1f9008a39fe32a9ca0ef5489d13a923a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-90-frame-89.png",
                "sha256": "7fe252f750c8d222ae58e7878baa4391510cf2ca26838053ab63ae114ee2e510",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-90-frame-79.png",
                "sha256": "7fe252f750c8d222ae58e7878baa4391510cf2ca26838053ab63ae114ee2e510",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 20.77191840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-900-frame-15.png",
                "sha256": "d7adc00c5474098ee1940f83e4fe9655e916c5db97e286d668ae8e49a5821cde",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-900-frame-102.png",
                "sha256": "7fe252f750c8d222ae58e7878baa4391510cf2ca26838053ab63ae114ee2e510",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-900-frame-792.png",
                "sha256": "7fe252f750c8d222ae58e7878baa4391510cf2ca26838053ab63ae114ee2e510",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/9x16-duration-900-frame-899.png",
                "sha256": "7fe252f750c8d222ae58e7878baa4391510cf2ca26838053ab63ae114ee2e510",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.26877170138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-90-frame-10.png",
                "sha256": "3f79c9408285ca67e53398eb108513faa92978c78ed8027445888c509a485891",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-90-frame-89.png",
                "sha256": "91ba59b1663466d5cce43d59394fd84df42aa36825dd390ab36ff61c46e1774f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-90-frame-79.png",
                "sha256": "91ba59b1663466d5cce43d59394fd84df42aa36825dd390ab36ff61c46e1774f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.254774305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-900-frame-15.png",
                "sha256": "d66b606d04b9397d38edb51cc861847b68fad1eda8caf022cdd91b4e011b4c33",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-900-frame-102.png",
                "sha256": "91ba59b1663466d5cce43d59394fd84df42aa36825dd390ab36ff61c46e1774f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-900-frame-792.png",
                "sha256": "91ba59b1663466d5cce43d59394fd84df42aa36825dd390ab36ff61c46e1774f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-booking-slots/1x1-duration-900-frame-899.png",
                "sha256": "91ba59b1663466d5cce43d59394fd84df42aa36825dd390ab36ff61c46e1774f",
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
        "note": "Flowing serif headline and confirmation toast beside a table booking card; no overlaps in any brand."
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
      "bundleSha256": "4a6696e16851988035848ba146360091f2ef426cb68b9d0af84b15b5c90a586a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.089Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/16x9/detail.mp4",
      "bg": "#381417",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "623f8b5b8e737827e161d151df47f75bfc90908029f75d744b04db2859a6cffe",
        "loop": "458bc0fefbe190f73bc9ef7bba6026b11cbcc2aa8abb7e122869c425d8870f01",
        "detail": "067aa0d783453bd2ef7eda0964f0ade844c29456f12b45654f4ef29fe869a5a4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/9x16/detail.mp4",
      "bg": "#320e14",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "848872598e496dcdb8d52d48a2778b8da636987dffab30afa9e0177341e7eb95",
        "loop": "73c3ea1087085ae6e4d7c94d7f7000d5513396a8301131262c47bdc0176a0793",
        "detail": "7b7d9fdb5e2ad248f6d772b33068cd96ca000561d004483eed6f70170c5f66a8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-booking-slots/1x1/detail.mp4",
      "bg": "#351116",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f02e86be85e7e3622ae805e97234309b74bea1071b4ad9d5ba02c6f3e13c9c55",
        "loop": "2bad4a9638f34c07682ad190fd7504e8983150162c577d0ea5e14764978f7986",
        "detail": "bec0ade149002180314f1a6fa337e5657d563b846afc3447877cbe39ffb5a411"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4a6696e16851988035848ba146360091f2ef426cb68b9d0af84b15b5c90a586a/index.mjs",
    "sha256": "4a6696e16851988035848ba146360091f2ef426cb68b9d0af84b15b5c90a586a",
    "bytes": 203442,
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
    "at": "2026-10-09T07:14:32.081Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
