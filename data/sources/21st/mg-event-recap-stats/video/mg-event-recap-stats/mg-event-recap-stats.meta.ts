// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "digit-roll-stat-row"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "digit-roll-stat-row",
    "recap",
    "stats",
    "numbers",
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
      "in": 81,
      "out": 0
    },
    "markers": {
      "settled": 81
    },
    "beats": [
      0,
      20,
      41,
      61,
      81
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
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "v1",
      "type": "text",
      "maxChars": 7,
      "role": "value"
    },
    {
      "key": "v2",
      "type": "text",
      "maxChars": 5,
      "role": "value"
    },
    {
      "key": "v3",
      "type": "text",
      "maxChars": 5,
      "role": "value"
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
      "target": "digit-roll-stat-row",
      "prop": "transform",
      "from": "enter",
      "settledBy": 81,
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
    "ink": "#FFFFFF",
    "accent": "#C8FF3A",
    "secondary": "#5865FF",
    "paper": "#2330F0",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Meridian 25, in numbers.",
    "v1": "2,400",
    "v2": "86",
    "v3": "41"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "v1",
      "label": "V 1",
      "type": "text",
      "max": 7,
      "role": "value"
    },
    {
      "key": "v2",
      "label": "V 2",
      "type": "text",
      "max": 5,
      "role": "value"
    },
    {
      "key": "v3",
      "label": "V 3",
      "type": "text",
      "max": 5,
      "role": "value"
    }
  ],
  "name": "Event Recap Numbers",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-recap-stats",
    "bundleSha256": "011d71ce1c4534c623d137a70e73575aeb438ce9716b04340cb1ec1b15396ef7",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:49:19.054Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-paper.png",
        "sha256": "61c95fa39e977387acb9373a63be325f008d6956a706b006eb8f699e16cdb327"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-night.png",
        "sha256": "7c41bae004bf8f23e42196976830ba20e964b7e36399b16f9d71b8a952ce8f5e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-color.png",
        "sha256": "2af89cb2cdcdfa615e8e2324aff8bf47695f85835c3099000a82cc46ecb0f972"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-paper.png",
        "sha256": "5044f751b1313e3dad95028f48859570617521ccedccac23da61aeddc76d10ed"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-night.png",
        "sha256": "8b2a347dc9a15e834979bf227740fccc51e0891035088c2aeff3837f335e3c6d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-color.png",
        "sha256": "1ffd81b92b8d169f2b3980fea8167c186b6ecfae74f4d9517a133a065ca1fbe6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-paper.png",
        "sha256": "d084976f26de341c647a14e780629902c2be04c5e48668bc6963ad45c3bd36e0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-night.png",
        "sha256": "10a3dfd5b2f6eff1f81c07725e5009f1e88dd6cd0e3c0f1ea8f6c418a1d904b3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-color.png",
        "sha256": "fb97c45e1b1d07edfc6bbc462bdbb2d828954cc7b0b5766a9e637aa98d452d1f"
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
          "mg-event-recap-stats--16x9",
          "mg-event-recap-stats--9x16",
          "mg-event-recap-stats--1x1"
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
            "paperNight": 42.975911458333336,
            "paperColor": 16.270100911458332,
            "region": {
              "left": 94,
              "top": 84,
              "width": 1752,
              "height": 966
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 59.933078342013886,
            "paperColor": 27.533799913194443,
            "region": {
              "left": 76,
              "top": 76,
              "width": 929,
              "height": 1679
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 54.16533745659722,
            "paperColor": 21.310139973958332,
            "region": {
              "left": 65,
              "top": 65,
              "width": 963,
              "height": 987
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
            "occupancy": 1.1553980195473255,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1553980195473255,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.156718474426808,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0571738099174857,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0571738099174857,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.066062959069945,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1548813198118755,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1548813198118755,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1548813198118755,
            "bad": [],
            "measured": 13
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.562934027777778,
        "frames": [
          12,
          81,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.6767578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-90-frame-10.png",
                "sha256": "055cda5c7de98f9259919b16dc59c0308ffa12665aa4a11374c6366b6514f38f",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-90-frame-81.png",
                "sha256": "b046a9292e05991e11c878ad19570e65ab340fd21827ef54bbf463d8dfb804b3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-90-frame-79.png",
                "sha256": "c34dfec20c98e875cdc19756e5f9b61200e45923ecd2acbbff0a93218da59b0f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-90-frame-89.png",
                "sha256": "b046a9292e05991e11c878ad19570e65ab340fd21827ef54bbf463d8dfb804b3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.562934027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-900-frame-12.png",
                "sha256": "7b9185784c73a1d8d3949de821ad1cb4a6028b96f2c8c101682c6fe36458b47a",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-900-frame-81.png",
                "sha256": "c34dfec20c98e875cdc19756e5f9b61200e45923ecd2acbbff0a93218da59b0f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-900-frame-792.png",
                "sha256": "c34dfec20c98e875cdc19756e5f9b61200e45923ecd2acbbff0a93218da59b0f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/16x9-duration-900-frame-899.png",
                "sha256": "c34dfec20c98e875cdc19756e5f9b61200e45923ecd2acbbff0a93218da59b0f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.649848090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-90-frame-10.png",
                "sha256": "1daa787653cfecc5f3cb1ed66595ab526aa9e10b4d151d61e28a267546058096",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-90-frame-81.png",
                "sha256": "6ecbb17234bf464a978797377241f008a1162e9bc8169d7ea1844014686e9c1d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-90-frame-79.png",
                "sha256": "b4ca1f5c52cac8a9286f797a1c134b8668f8f7e37a484dc0696fc5f0a43b8b72",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-90-frame-89.png",
                "sha256": "a0544aa9f2d5d212f26520dfd4b27cfbc07b2f6e5d2211b57c01baadfe1af555",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.350260416666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-900-frame-12.png",
                "sha256": "e0e5545fb55d6a58451a24f86d8f4c5672083bc1dfbf31f260210d524ae348dc",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-900-frame-81.png",
                "sha256": "ccd391bdbb04fdf7e5472b98f1c3c63c509267eaa4144a951aa8cc59007ae702",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-900-frame-792.png",
                "sha256": "f42dd2c52c76be40d3a67ca363fa477458497af564e85864f26745160d1f0ed2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/9x16-duration-900-frame-899.png",
                "sha256": "6ecbb17234bf464a978797377241f008a1162e9bc8169d7ea1844014686e9c1d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.289713541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-90-frame-10.png",
                "sha256": "06ee69c87039552b828c6df01e4aa3b07d2522634e603feddcff1398e14ad576",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-90-frame-81.png",
                "sha256": "e39cb87d85bd003e601c40815f566abc2d42e19ce08966c9fc69e48c1633da38",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-90-frame-79.png",
                "sha256": "e39cb87d85bd003e601c40815f566abc2d42e19ce08966c9fc69e48c1633da38",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-90-frame-89.png",
                "sha256": "1834e4704a5a77c9ffe82f613c43b6cf1de13b8ecc2aa555eb9bad1c8b3ee144",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.014973958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-900-frame-12.png",
                "sha256": "78ceb3cff8e39291a27971c14e9a298409dae6a76aecb0927d52d5ef3b8e6bba",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-900-frame-81.png",
                "sha256": "1834e4704a5a77c9ffe82f613c43b6cf1de13b8ecc2aa555eb9bad1c8b3ee144",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-900-frame-792.png",
                "sha256": "1834e4704a5a77c9ffe82f613c43b6cf1de13b8ecc2aa555eb9bad1c8b3ee144",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-recap-stats/1x1-duration-900-frame-899.png",
                "sha256": "e39cb87d85bd003e601c40815f566abc2d42e19ce08966c9fc69e48c1633da38",
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
        "note": "Event recap headline with three counters rolling in and a join CTA; rebrands distinct."
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
      "bundleSha256": "011d71ce1c4534c623d137a70e73575aeb438ce9716b04340cb1ec1b15396ef7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.095Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/16x9/detail.mp4",
      "bg": "#2330f0",
      "posterFrame": 81,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "597e96679e916b2f9ba1099e42b12f0024bf2b720c28c85b53ef1a809a5b4282",
        "loop": "cb61143c666d67cb0565b701739fa6e51c2d9e4bf679a37d5e12ef628fedf692",
        "detail": "98579bdb18902c8b3af4b6ca18ac664618bbd6d9895c035e7637baaa51abf60a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/9x16/detail.mp4",
      "bg": "#2330f0",
      "posterFrame": 81,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "264c43d4a9a1753fbf28a36677cdcc9a1b6439f5ac83e10136ea937480b60fd0",
        "loop": "8383e4845be09b2e964227a8538df0f10f9802094e3f3d0a195ed190a2f34cff",
        "detail": "02b2d4d922222def6917fe01eff18a854696f23aa7d74231ff4fcbb8f840d391"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-recap-stats/1x1/detail.mp4",
      "bg": "#2330f0",
      "posterFrame": 81,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fb7101485b4c3ee470883eb9bfeb577ecab424723723c2e9a859c20e72324e7a",
        "loop": "d74fdb58cb3bbc86afc034aeff63f37efd509fb6d1108940dde60935deb3b0e6",
        "detail": "bca9326f7c4140ebd0f1ba814696fbc6d70ee0a42ea2208e3b5ff0d1bb90568d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/011d71ce1c4534c623d137a70e73575aeb438ce9716b04340cb1ec1b15396ef7/index.mjs",
    "sha256": "011d71ce1c4534c623d137a70e73575aeb438ce9716b04340cb1ec1b15396ef7",
    "bytes": 295999,
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
    "at": "2026-10-09T07:18:32.768Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
