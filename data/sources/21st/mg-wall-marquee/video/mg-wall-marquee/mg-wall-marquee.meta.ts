// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "tilted-marquee-rows"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "tilted-marquee-rows",
    "marquee",
    "wall",
    "headline"
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
      "in": 75,
      "out": 0
    },
    "markers": {
      "settled": 75
    },
    "beats": [
      0,
      19,
      38,
      56,
      75
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
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "line1",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 50,
      "role": "body"
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
      "target": "tilted-marquee-rows",
      "prop": "transform",
      "from": "enter",
      "settledBy": 75,
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
    "ink": "#15171A",
    "accent": "#E0553F",
    "secondary": "#787A7D",
    "paper": "#FBE2EE",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen for teams",
    "line1": "Loved by teams",
    "line2": "who ship daily.",
    "sub": "40,000 teams in 120 countries run on Lumen"
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
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 50,
      "role": "body"
    }
  ],
  "name": "Tilted Screenshot Wall",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-marquee",
    "bundleSha256": "2df8bd09b6cd49d18883a3a586495b0f7dff08186aae7ec8c48dfc94e552c7da",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:18.769Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-paper.png",
        "sha256": "4abd5e2c71507d73134c8a51722d64568730cd3f29b7288f2176d1c2972e2151"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-night.png",
        "sha256": "da93caeb4807e26eaea6500c14816b92d3a782dc46d4b8684f4db50fdf208e91"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-color.png",
        "sha256": "915ab9f4557447501922df8f8352d25c3143f1c7b7549d813f818d96e439668a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-paper.png",
        "sha256": "cba3238b5ebd1d53aeffb7ba81f6dd87644b354c4e0cf037faf27071cd89de68"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-night.png",
        "sha256": "26f93409dbc3d540e1f7e8fc62c7aa6139e15744111000f3bbe48473518b2d3a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-color.png",
        "sha256": "992c33c5f9441c811c22836d4e3ecca5038f1e480c8984dd2c3c81b0993af668"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-paper.png",
        "sha256": "d64fad8fa691cc9bc2d602bd8380d7a8616a8913f4ff0c91ec5ffef2b43e7f31"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-night.png",
        "sha256": "83267e8f8d6e790c5e561f1bc1d414689c152f0a98bf6f558e3a217a711b362c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-color.png",
        "sha256": "92196d28490f0381014568683a0fbddc39513bcc64a53fcdd614c46b8fa7e46f"
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
          "mg-wall-marquee--16x9",
          "mg-wall-marquee--9x16",
          "mg-wall-marquee--1x1"
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
            "paperNight": 77.66910807291667,
            "paperColor": 9.02248806423611,
            "region": {
              "left": 9,
              "top": 3,
              "width": 1903,
              "height": 1074
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 87.34754774305556,
            "paperColor": 12.567138671875,
            "region": {
              "left": 0,
              "top": 23,
              "width": 1080,
              "height": 1870
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 84.89512803819444,
            "paperColor": 10.299479166666666,
            "region": {
              "left": 0,
              "top": 5,
              "width": 1080,
              "height": 1070
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
            "occupancy": 1.3968813316221553,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3968813316221553,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3968813316221553,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3803264361300078,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3803264361300078,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3803264361300078,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4041110271269004,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4041110271269004,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4041110271269004,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 32.190104166666664,
        "frames": [
          11,
          75,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 32.328450520833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-90-frame-10.png",
                "sha256": "59c4a4edeefc4e566cb68c229c85a2e29ac89d514b27e29516ccf8848178f72d",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-90-frame-75.png",
                "sha256": "2b855d9a811c9d029c93fbebeb70d1a8a25bc1f0837dcaa44f86038bcbfeb752",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-90-frame-79.png",
                "sha256": "d25b6435f4d3f020e9ce61af223b01265f61400b8960c797b6fb3e19b94d3a22",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-90-frame-89.png",
                "sha256": "2b855d9a811c9d029c93fbebeb70d1a8a25bc1f0837dcaa44f86038bcbfeb752",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 32.190104166666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-900-frame-11.png",
                "sha256": "52ee06ff5ef1e57dec9093325f171b88b77ab2092137c7006181508f2bbefd95",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-900-frame-75.png",
                "sha256": "2b855d9a811c9d029c93fbebeb70d1a8a25bc1f0837dcaa44f86038bcbfeb752",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-900-frame-792.png",
                "sha256": "d25b6435f4d3f020e9ce61af223b01265f61400b8960c797b6fb3e19b94d3a22",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/16x9-duration-900-frame-899.png",
                "sha256": "2b855d9a811c9d029c93fbebeb70d1a8a25bc1f0837dcaa44f86038bcbfeb752",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 25.426432291666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-90-frame-10.png",
                "sha256": "9203e27d2d892090470422767c6b05073e67571ea3e50c60b11092362b8df8d2",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-90-frame-75.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-90-frame-79.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-90-frame-89.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.404622395833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-900-frame-11.png",
                "sha256": "881b2f8761cd2733e5897f92ab3810a296f58ba4cc9f758a19a5225dc10306e8",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-900-frame-75.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-900-frame-792.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/9x16-duration-900-frame-899.png",
                "sha256": "1a689aab5e8c0742500ffea70f9875fbd7a0909bb453b419407962a8bb1eef45",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 31.87521701388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-90-frame-10.png",
                "sha256": "6539e3b2cfdf661645a4bf6376d20094bf1ad035408882b5533e7232e1c110e0",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-90-frame-75.png",
                "sha256": "51de7f47595be828f81a90d9ed61c7c9beb2f63042fe0950e7963ff030c1b8fc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-90-frame-79.png",
                "sha256": "fe0ddcb3bd478fd32cae447b0e9c8b172214f8310f92c9c8b0122a9b2c922aca",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-90-frame-89.png",
                "sha256": "fe0ddcb3bd478fd32cae447b0e9c8b172214f8310f92c9c8b0122a9b2c922aca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 31.85568576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-900-frame-11.png",
                "sha256": "5188dd66559785603366d22b80ff443d0f3e4196dc819f87e349d0da4728da35",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-900-frame-75.png",
                "sha256": "fe0ddcb3bd478fd32cae447b0e9c8b172214f8310f92c9c8b0122a9b2c922aca",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-900-frame-792.png",
                "sha256": "fe0ddcb3bd478fd32cae447b0e9c8b172214f8310f92c9c8b0122a9b2c922aca",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-wall-marquee/1x1-duration-900-frame-899.png",
                "sha256": "fe0ddcb3bd478fd32cae447b0e9c8b172214f8310f92c9c8b0122a9b2c922aca",
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
        "note": "A tilted wall of app screenshots scrolls behind a serif headline on a pale pink paper; code tiles are neutral dark."
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
      "bundleSha256": "2df8bd09b6cd49d18883a3a586495b0f7dff08186aae7ec8c48dfc94e552c7da",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-marquee/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-marquee/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-marquee/16x9/detail.mp4",
      "bg": "#f5ccd3",
      "posterFrame": 75,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "457ed059ca2c1f5c04a86d9d502a775a621977ba8bf208b64fcbd4e12cc4c985",
        "loop": "10525b16fa81c76ad0c982958e5b26d6469148f1e48bba8fa0fafc8c9dfbb864",
        "detail": "2f400d3879c881dcac7adacb52ff75ace93120eb50708f41b255653e80f2f6b7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-marquee/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-marquee/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-marquee/9x16/detail.mp4",
      "bg": "#f7ced5",
      "posterFrame": 75,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "be7c87b1ab80ab86787d4cc1e5816b9b77d208ed937d494fb8474c50e16d788b",
        "loop": "11c3013f23be6982fc05175f50179850c4dccc6f2c94cde67e56ca74659ecce4",
        "detail": "5613568fb8499fe468e2e347fe41a16d318a8c6bdf12f70520bd96880a25d6a8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-marquee/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-marquee/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-marquee/1x1/detail.mp4",
      "bg": "#f7ced5",
      "posterFrame": 75,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "acf75d89c8d414beae4231ffe8ac43dece925a4dc0772184ef6a41d4720997c9",
        "loop": "4c26bf2be2470e768644fbe9641a5a78fff429b76900898c67fc3391f2a7fc51",
        "detail": "1aa677e4e9ef7118a3d49939b87f91f337e5f1bc2b865ead6082a9a574e1c2cc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2df8bd09b6cd49d18883a3a586495b0f7dff08186aae7ec8c48dfc94e552c7da/index.mjs",
    "sha256": "2df8bd09b6cd49d18883a3a586495b0f7dff08186aae7ec8c48dfc94e552c7da",
    "bytes": 183422,
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
    "at": "2026-10-09T04:15:19.091Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
