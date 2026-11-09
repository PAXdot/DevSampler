// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "media/component-demo",
  "tags": [
    "component",
    "demo",
    "b-roll",
    "showcase",
    "ui",
    "21st"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 28,
      "out": 0
    },
    "markers": {
      "settled": 32
    },
    "beats": [
      0,
      14
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "video",
      "type": "video"
    },
    {
      "key": "demoHeadline",
      "type": "text",
      "role": "demo-headline"
    },
    {
      "key": "demoDetail",
      "type": "text",
      "role": "demo-detail"
    },
    {
      "key": "primaryAction",
      "type": "text",
      "role": "demo-action"
    },
    {
      "key": "secondaryAction",
      "type": "text",
      "role": "demo-action"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "author",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "cardColor": "colors.background",
    "demoColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "bodyFontFamily": "fonts.body",
    "serifFontFamily": "fonts.serif",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "scale",
      "from": "0.94",
      "settledBy": 28,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 32,
      "easing": "spring"
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
      "frame": 70
    },
    "hover": [
      0,
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/showcase.tsx (Frame, Label)"
  },
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "focus"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "video": "",
    "caption": "Aurora hero",
    "author": "@21st",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#09090B",
    "cardColor": "#FFFFFF",
    "fontFamily": "Geist",
    "demoColor": "#0A0A0A",
    "secondaryColor": "#898B8F",
    "bodyFontFamily": "Geist",
    "serifFontFamily": "Instrument Serif",
    "monoFontFamily": "Geist Mono",
    "demoHeadline": "Build something beautiful",
    "demoDetail": "Components, templates and themes from the community.",
    "primaryAction": "Get started",
    "secondaryAction": "Learn more",
    "push": true
  },
  "fields": [
    {
      "key": "video",
      "label": "Video",
      "type": "asset"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "author",
      "label": "Author",
      "type": "text",
      "max": 32,
      "role": "subline"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "cardColor",
      "label": "Card color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "demoColor",
      "label": "Demo color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondaryColor",
      "label": "Secondary color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "demoHeadline",
      "label": "Demo headline",
      "type": "text",
      "max": 64,
      "role": "demo-headline"
    },
    {
      "key": "demoDetail",
      "label": "Demo detail",
      "type": "text",
      "max": 120,
      "role": "demo-detail"
    },
    {
      "key": "primaryAction",
      "label": "Primary action",
      "type": "text",
      "max": 24,
      "role": "demo-action"
    },
    {
      "key": "secondaryAction",
      "label": "Secondary action",
      "type": "text",
      "max": 24,
      "role": "demo-action"
    },
    {
      "key": "push",
      "label": "Push",
      "type": "boolean"
    }
  ],
  "name": "Component B-roll",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "component-broll",
    "bundleSha256": "e7457989d870a1ff5c146977bfa859db66e804885478e7d51286b8c1cddf6a1e",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:06.503Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-paper.png",
        "sha256": "e57181c834ded4117a0f32d3d3052cb0040077e6ebc62d77166dda2bb2579299"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-night.png",
        "sha256": "d385bfacca37e2bcdd5935ccc5da538b04af0ee7d8752782df2a78d093591c6b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-color.png",
        "sha256": "2acf0cd55e427373e241cc48fff6855a474ced2f7caabb8c17aa123839a8dcd5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-paper.png",
        "sha256": "0dcf7afc229eab9af03cf185faebccb5ec38d113bb4742caed4eafa9b7feb266"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-night.png",
        "sha256": "1fd4aabd30914ea0f1605d596babe5dc4a5d31e5e4d6f6867c9599497361c71f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-color.png",
        "sha256": "9cfa0db9ef28831e332a8dfcd6019ccb1c19d438a6455c6775f28e9c2f4de3bc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-paper.png",
        "sha256": "2472210d7dfba4f6e302aabb2f3640412c8e54d8873c2c2628c43856ffa23582"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-night.png",
        "sha256": "04f7daccd7ed72dbb52de2305508e7fa983f76206794e48344b7297d5891018c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-color.png",
        "sha256": "5a8c5321b5d8cabce29e2b1a40af67011d2bbff5af9f249474418d3f30f6d541"
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
          "component-broll--16x9",
          "component-broll--9x16",
          "component-broll--1x1"
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
            "paperNight": 125.191162109375,
            "paperColor": 13.618896484375,
            "region": {
              "left": 289,
              "top": 137,
              "width": 1342,
              "height": 833
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 117.64520941840277,
            "paperColor": 16.61667209201389,
            "region": {
              "left": 37,
              "top": 122,
              "width": 1006,
              "height": 1671
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 122.37887912326389,
            "paperColor": 15.723063151041666,
            "region": {
              "left": 77,
              "top": 168,
              "width": 926,
              "height": 746
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
            "occupancy": 0.7622018232447302,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.761284612867781,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7622018232447302,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.148922869687999,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1406720770870078,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1365466807865123,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8371009583531631,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8382260940498744,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8393512297465856,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.752712673611111,
        "frames": [
          10,
          70,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 23.773328993055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-60-frame-7.png",
                "sha256": "8f902521af3dca9f96c92de16aeb1e9a6e7719d4a54db44c5d42b7f3b381f7ea",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-60-frame-59.png",
                "sha256": "8028d27402870e4f00f0b0448da0f692a0e283319ae4d99498ea75440937d0ee",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-60-frame-52.png",
                "sha256": "7665d3aaf25fb4487e35c446065198bbe65f878aa972ef880b98e493579d4a5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.744249131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-900-frame-10.png",
                "sha256": "4a34d9d7fddbf11c4d3db519933685f0cb31f81494f9108f1da81d1d02d6e831",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-900-frame-70.png",
                "sha256": "ac34b6f3617b323d35f19664801c15c50ec2bfb5512b32b735f6bf28844b2905",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-900-frame-792.png",
                "sha256": "b65e6534ba13eb76ea58b37d40fa5ae27cea0d7cb476ed49cc5f7ae45f1c438b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/16x9-duration-900-frame-899.png",
                "sha256": "c6d4316305d607c55ef724fcb3918bd6b9df5ccbf598449c2c92e6cee2775cc7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 30.357530381944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-60-frame-7.png",
                "sha256": "b2743500aa9c776148481116f15d816a9a0f0d3a013a3dd4eded0c8305d5e24b",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-60-frame-59.png",
                "sha256": "48f625906a60ff5c585d25d5fe655bccf43af81520b880f0a43ee9d196e484e9",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-60-frame-52.png",
                "sha256": "857e1113e53aeb00c090f4f2fbe014750482bcb78e2577e85dd84fd49f01af68",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.5166015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-900-frame-10.png",
                "sha256": "6e4ac3124b733be1cb6bf30db435420298d50134766327158a3c80234f3abdb4",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-900-frame-70.png",
                "sha256": "121107f2f00c70d2ee46644065e5e2a6282ce846f585407f06dff3592165fbe6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-900-frame-792.png",
                "sha256": "2302b29db987c931e98f96ec615387da921e6daf77375e8533de4b70d2673976",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/9x16-duration-900-frame-899.png",
                "sha256": "ed1156efa04ad3ee73b35532ef3d70150dfd196d02b52606d015637e55495048",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 25.899522569444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-60-frame-7.png",
                "sha256": "5b39f60b892372c15ab3916ec964202f10dcb0554fb65df3d54344419a9b975f",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-60-frame-59.png",
                "sha256": "8fa6ff3a53ff46cbcd0a27eae17f81c83f22880521dadf3fd7d56fc120df2b9e",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-60-frame-52.png",
                "sha256": "b527f844797492f3d75ce5d1c29194cacb255b7f18ad5f134d2607e2da32faf5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.414388020833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-900-frame-10.png",
                "sha256": "b37acaf257a5c076b22a29aa268f6a67f224dae9098f6793c4c278cec10700a2",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-900-frame-70.png",
                "sha256": "fbef35ff47f9b0224e6b7bbe0efcd2bfbb260781ec0033c9848091c18ded930b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-900-frame-792.png",
                "sha256": "33c661f2dbbd3b85820fa1eca32e60940be9290240b749ce1ee78f47d6146955",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/component-broll/1x1-duration-900-frame-899.png",
                "sha256": "292212a7e59aae669172a3856fb1909c2e3b0d15f6ee5abb555b1c90bd8501bb",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A real component preview card floats with a soft brand-blue and neutral glow and caption; no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e7457989d870a1ff5c146977bfa859db66e804885478e7d51286b8c1cddf6a1e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/component-broll/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/component-broll/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/component-broll/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "085b0599abc87e5c586bd26740bdd7ba2e58b77226b35bb790d365b40e0b8544",
        "loop": "f10a8997b64ec709028b2473c56d20883ad8601095f76f771d9bbb2fa3de3bc9",
        "detail": "7aa3654acbcc49ea733e2d3640b0850cc521e571192d17fba39982c27356e7db"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/component-broll/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/component-broll/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/component-broll/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6109ab1fe5c02bf18fc5ed0eb8f7d88b0690a46be2bae31ba8721edd3fd28e12",
        "loop": "eff4109f8d6dae4f9c4d34e802287f87616e5e4c794374ec3b2da0db868ffe51",
        "detail": "4c8c41825861c2ee5f4845ab05ccbcf9b21869cf6f07e7e1317b51731b5e8fd1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/component-broll/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/component-broll/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/component-broll/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0750506b9c0e63de912facc642e70d038366d0b3d9254d1c1e29d20cad9ab433",
        "loop": "9eb1dd989f58f7db8b26ae4861020e8e56c87f2820e7f083642d54de63401fbe",
        "detail": "b50a59a641a9bb6f2a5548691f2b001105104560956b32c005453da4627bda51"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e7457989d870a1ff5c146977bfa859db66e804885478e7d51286b8c1cddf6a1e/index.mjs",
    "sha256": "e7457989d870a1ff5c146977bfa859db66e804885478e7d51286b8c1cddf6a1e",
    "bytes": 165767,
    "externals": [
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
    "at": "2026-10-09T03:10:58.497Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
