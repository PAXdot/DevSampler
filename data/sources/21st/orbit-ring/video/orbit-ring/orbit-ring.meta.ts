// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/ecosystem",
  "tags": [
    "orbit",
    "rings",
    "ecosystem",
    "community",
    "avatars",
    "integrations",
    "network"
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
      "in": 54,
      "out": 0
    },
    "markers": {
      "settled": 56
    },
    "beats": [
      0,
      4,
      10
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "centerLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    }
  ],
  "brand": {
    "secondary": "colors.secondary",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "rings",
      "prop": "draw",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "badges",
      "prop": "scale",
      "from": "0",
      "settledBy": 54,
      "easing": "spring"
    },
    {
      "target": "badges",
      "prop": "orbit",
      "easing": "linear"
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V12"
  },
  "job": "testimonials",
  "language": "product-ui",
  "mechanic": [
    "orbit"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "centerLabel": "Your community",
    "count": 12,
    "speed": 24,
    "badges": "people",
    "secondary": "#FF8A5B",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "centerLabel",
      "label": "Center label",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 6,
      "max": 16
    },
    {
      "key": "speed",
      "label": "Speed",
      "type": "number",
      "min": 0,
      "max": 60
    },
    {
      "key": "badges",
      "label": "Badges",
      "type": "select",
      "options": [
        "people",
        "icons",
        "dots"
      ]
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Orbit Ring",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "orbit-ring",
    "bundleSha256": "0931596b80f13528ab7457f99fc4a8d77eaa7c6ffec1a410cfce7cf582bd9f72",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:49:33.031Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-paper.png",
        "sha256": "180dc916378cdf16ad0972599412075471078ed71b26bcd56152b01373921269"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-night.png",
        "sha256": "c3626dac60d2abae71bf9f4b95a541f6f7dc683c5547b4dbc7d720499b5b4d1a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-color.png",
        "sha256": "2a14cd6c6dd7436e2746c6a719c72b4046e0e4d8f914fb0fb266948229e82d6a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-paper.png",
        "sha256": "a0c995432ec81c95244eae151f523a5e1075c20d15ac1284069ee74a63e1004e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-night.png",
        "sha256": "1fdee776b66d522e9d7c56c22304a3df09586431e6f3da3786ed0265194dbbe4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-color.png",
        "sha256": "d956fb17d55132e60f750413b5284a2211ae60f1fbfff1b47e210097ccc69859"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-paper.png",
        "sha256": "8320c81970fbf89b3391ab500d0ae3de6794c669e4608fbd0a59e919796caaa4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-night.png",
        "sha256": "d4cfec62f727ff969d818faf6dc5ee7de200200d8b3fd86b6eca55e81c803ca1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-color.png",
        "sha256": "715441626b7958b1484931224648128c6c1cd4b801bb1482d6bd330f9ee893a1"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          },
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "orbit-ring--9x16",
          "orbit-ring--1x1",
          "orbit-ring--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.522732204861114,
            "paperColor": 17.64279513888889,
            "region": {
              "left": 159,
              "top": 556,
              "width": 818,
              "height": 838
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.65475802951389,
            "paperColor": 12.428602430555555,
            "region": {
              "left": 142,
              "top": 242,
              "width": 836,
              "height": 627
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 28.189290364583332,
            "paperColor": 9.661322699652779,
            "region": {
              "left": 446,
              "top": 242,
              "width": 1068,
              "height": 627
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9760510401648658,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9760510401648658,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9760510401648658,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3268642647959963,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3268642647959963,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3268642647959963,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9534852955456875,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9534852955456875,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9534852955456875,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.802408854166668,
        "frames": [
          8,
          56,
          149
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 21.04535590277778,
            "retainedAlpha": 1.0021154298168764,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-60-frame-7.png",
                "sha256": "44ba5772cffdb4acd09f8b06089aae9dc3299019375dc98bca6a66da8a00feab",
                "alphaMass": 16601
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-60-frame-56.png",
                "sha256": "9621b92aabd55df720b4a0f95b578e5bf771a61f8dbbbaf48fadc630f7745f46",
                "alphaMass": 46726
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-60-frame-52.png",
                "sha256": "37b54397c9bcf5b000b0f00bfaf8f24a360e7fecd1e7d3b3e2eb6501c16d8656",
                "alphaMass": 46799
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-60-frame-59.png",
                "sha256": "8119d1d2726f17c15c7bd5657e41395f668e7938d10eaf702ad73e3fd633cb51",
                "alphaMass": 46898
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 19.32953559027778,
            "retainedAlpha": 1.0075302171355225,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-900-frame-8.png",
                "sha256": "96f2179cdaff06a27d8ef6d1c8da2a941bf7c8dfd76a11b0353ca8c37148b91d",
                "alphaMass": 24900
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-900-frame-56.png",
                "sha256": "9621b92aabd55df720b4a0f95b578e5bf771a61f8dbbbaf48fadc630f7745f46",
                "alphaMass": 46726
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-900-frame-792.png",
                "sha256": "e9a10630dcecc9009c331a9940912783a5b0013c1b1f8d89ac93b720e3ce7b0d",
                "alphaMass": 46745
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/9x16-duration-900-frame-899.png",
                "sha256": "ff9772f165ef35dce831dd14064256d2b0e336d628d7cef2b8caac1c9da1c6d3",
                "alphaMass": 47097
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 28.848307291666668,
            "retainedAlpha": 0.990165891667714,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-60-frame-7.png",
                "sha256": "72494b62feed5bc14643300f70ec8cb96e060da04c59a25ac0c80d68eb48e360",
                "alphaMass": 6072
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-60-frame-56.png",
                "sha256": "089e5b9dffb45437c38534fa4e4a57332526336d01757f5f2c9988aaaba82306",
                "alphaMass": 31590
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-60-frame-52.png",
                "sha256": "b4c0a1e99270a9a17d2a15ce60ff4d45b5eee5906603891d93d51e59beb34667",
                "alphaMass": 31828
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-60-frame-59.png",
                "sha256": "01a9df9f1a5e3a2c51f1b63e951ccd0ef1e0cde534e3aa7512ce3d27f1d460d0",
                "alphaMass": 31515
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 27.667317708333332,
            "retainedAlpha": 0.9991443782481937,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-900-frame-8.png",
                "sha256": "032fccb02a2f559e85a4b30a4150a81f8bab1617b88cc14206a5ba3caa75e845",
                "alphaMass": 9165
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-900-frame-56.png",
                "sha256": "089e5b9dffb45437c38534fa4e4a57332526336d01757f5f2c9988aaaba82306",
                "alphaMass": 31590
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-900-frame-792.png",
                "sha256": "8b65f2102774a33f1eff0bf639d3d2588519f18b535d28ee88bc6da83161f0ad",
                "alphaMass": 31556
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/1x1-duration-900-frame-899.png",
                "sha256": "625edd3a0d556af79975d5de57fcbdafe2f7efcd3d39453fd6b0518baa2f2854",
                "alphaMass": 31529
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 19.58452690972222,
            "retainedAlpha": 0.9904453441295547,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-60-frame-7.png",
                "sha256": "1efa51e8e15d2db4d52eab3961970d4a50dd405331d0cc2373c9a491e27a375a",
                "alphaMass": 3477
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-60-frame-56.png",
                "sha256": "75cda6c4ba2655f5324b7ee8d77539fb0ae53dfb6f960d14c55f436f421ff3d5",
                "alphaMass": 18277
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-60-frame-52.png",
                "sha256": "407544053c1c5ff31f6bb8c0b34d2524fd945a1f280e3176fc666c88a987c364",
                "alphaMass": 18525
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-60-frame-59.png",
                "sha256": "dc53da0eec8cd3206edcc69f6a343bdd4fc819b42adab1ff47786b492c2c4ec4",
                "alphaMass": 18348
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 18.802408854166668,
            "retainedAlpha": 0.9995080623121071,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-900-frame-8.png",
                "sha256": "ff418d3fbe003eda32dafb9c54d87688b3f4e9958d5a7feff5b3ca5bd686dc89",
                "alphaMass": 5229
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-900-frame-56.png",
                "sha256": "75cda6c4ba2655f5324b7ee8d77539fb0ae53dfb6f960d14c55f436f421ff3d5",
                "alphaMass": 18277
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-900-frame-792.png",
                "sha256": "57073ee2f47404b734b8d5066fddbe3106af5bc3d327fcd18ac377b8157ba66d",
                "alphaMass": 18295
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/orbit-ring/16x9-duration-900-frame-899.png",
                "sha256": "bc03269bbcc3bff6b8b3d7e6013cd0b8080b7fb03fec5a782eef3b9ad2feb27f",
                "alphaMass": 18286
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Community avatars orbit a brand-blue Your community chip; avatars in blue, gray tints and orange, no purple mixes."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 5,
        "compared": 5,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0931596b80f13528ab7457f99fc4a8d77eaa7c6ffec1a410cfce7cf582bd9f72",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/orbit-ring/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/orbit-ring/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/orbit-ring/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "68c3f1d72702a74ad24093522a58b4a4ec830ebe148a9d18736f290bbd7a6042",
        "loop": "8d1f55b01fd2d575f8e7883433c25fae2a0c18c20d2198765abfc599cd939bf5",
        "detail": "16e15e7190105539052d5d05114a27e23a05a0fabcf064587a623aa4fae33d37"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/orbit-ring/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/orbit-ring/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/orbit-ring/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "d91415cfda38328911e55f68a9f17924335430cf5ce9c61561c8231655f7dfbd",
        "loop": "e2213914cc314565a49d19cc2dafccc98aee1e20e9f0950c014c45e014140772",
        "detail": "9af78b67774a01a0a758c1c8d35aa837b3daaf211e31e75fbf81a205d352bece"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/orbit-ring/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/orbit-ring/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/orbit-ring/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e9501f0324c488cb684f52761e59189ef73108af3aff5a2307fbed9225a5e501",
        "loop": "308c39d4ca35d680ec461cba520548bd98d7ae93b049141c77aff8eb0d5bc681",
        "detail": "51260409715ff9e18866851ebd5fdc2b7a303931c552d747895e8bc28e804087"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0931596b80f13528ab7457f99fc4a8d77eaa7c6ffec1a410cfce7cf582bd9f72/index.mjs",
    "sha256": "0931596b80f13528ab7457f99fc4a8d77eaa7c6ffec1a410cfce7cf582bd9f72",
    "bytes": 167271,
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
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T04:16:42.932Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
