// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "wipe-reveal-old-to-new"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "wipe-reveal-old-to-new",
    "before-after",
    "redesign",
    "wipe"
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
      "key": "before",
      "type": "text",
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "after",
      "type": "text",
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "insight",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
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
      "target": "wipe-reveal-old-to-new",
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
    "ink": "#F5F5F7",
    "accent": "#3D63FF",
    "secondary": "#FF6AA2",
    "paper": "#0B0B0D",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "before": "Before",
    "after": "After",
    "insight": "Up 18%, driven by the Team plan"
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
      "key": "before",
      "label": "Before",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "after",
      "label": "After",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "insight",
      "label": "Insight",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Before After Wipe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ba-wipe",
    "bundleSha256": "ea55fbf09cbbcb618e98696b7ef94fc5b14a2c53d1f6f75a2afed58b47ec0639",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:55.373Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-paper.png",
        "sha256": "552ac09b197016e1974b61a6be5a030d5b05fceafeda708591f268a3c9a80de1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-night.png",
        "sha256": "4547e1a190c4d6e13448633af1799b8bb3d4452e860f61811315f36ccb401a76"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-color.png",
        "sha256": "663350ea1a86a4feb197928d20b710c8ecb16c558ee7e96e461a57b7a4bf37bd"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-paper.png",
        "sha256": "fc4109386ff163d7c817f72866ca04718da8f0b2161c25197294f869fc419ff1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-night.png",
        "sha256": "4da86dc7f95871a5657314d118c6956ac492bf33fa03248c5edc258bf022d137"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-color.png",
        "sha256": "f8c28ad54defe69f4ce7f273239936653c0821ae58543fc2b2ce41e301c8e3a4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-paper.png",
        "sha256": "d10a928dbbd7e17fd4ce5b2fe31d031562a53e97895fb7de69585fa8bec5cc09"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-night.png",
        "sha256": "c9d38214ff643da26c49ff8b6a1f6e28f64eea52596848f7fb72c374a3f6be80"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-color.png",
        "sha256": "51dcfad9a65fe6d5c84e58c42d9a608fad6cb91078d2c05b64b3ce4f38e458b8"
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
          "mg-ba-wipe--16x9",
          "mg-ba-wipe--9x16",
          "mg-ba-wipe--1x1"
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
            "paperNight": 58.62725151909722,
            "paperColor": 5.256700303819445,
            "region": {
              "left": 80,
              "top": 91,
              "width": 1761,
              "height": 989
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.43023003472222,
            "paperColor": 7.609239366319445,
            "region": {
              "left": 23,
              "top": 161,
              "width": 1034,
              "height": 1620
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 53.800211588541664,
            "paperColor": 6.046793619791667,
            "region": {
              "left": 23,
              "top": 65,
              "width": 1034,
              "height": 939
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
            "occupancy": 1.1903429147507771,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1903429147507771,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1903429147507771,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.141325469874164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.141325469874164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1448589852607711,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1759539206629155,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1759539206629155,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1797230037419635,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 52.970920138888886,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 53.026150173611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-90-frame-10.png",
                "sha256": "491620eb3c8209b84d1d08fb5a7f45238ab5505cf018f98aff5b3f04a945aba3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-90-frame-89.png",
                "sha256": "8e9da60e7c2615b64076f4eee6000238b5f374967cfc26d8cc13ca3bee7f87c7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-90-frame-79.png",
                "sha256": "8e9da60e7c2615b64076f4eee6000238b5f374967cfc26d8cc13ca3bee7f87c7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 52.970920138888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-900-frame-15.png",
                "sha256": "7cc5b5f149601f73b2cf6f85c96d417854482670c240a2aa7bc4b133b48cfd15",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-900-frame-102.png",
                "sha256": "8e9da60e7c2615b64076f4eee6000238b5f374967cfc26d8cc13ca3bee7f87c7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-900-frame-792.png",
                "sha256": "8e9da60e7c2615b64076f4eee6000238b5f374967cfc26d8cc13ca3bee7f87c7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/16x9-duration-900-frame-899.png",
                "sha256": "8e9da60e7c2615b64076f4eee6000238b5f374967cfc26d8cc13ca3bee7f87c7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 41.146484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-90-frame-10.png",
                "sha256": "2baf1d6d3ec1e0757a9b58ec7d47a9c1123cbd6d99769080da7cd0121096407d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-90-frame-89.png",
                "sha256": "671cf7acb5f8b41153a802b96d980f06e62f98749c932be19019983310b69006",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-90-frame-79.png",
                "sha256": "671cf7acb5f8b41153a802b96d980f06e62f98749c932be19019983310b69006",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 41.14214409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-900-frame-15.png",
                "sha256": "fee630a6c24eb3396546c151f2d3ecaa0324fcaedbb998ba31c7de16a4c60ce2",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-900-frame-102.png",
                "sha256": "671cf7acb5f8b41153a802b96d980f06e62f98749c932be19019983310b69006",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-900-frame-792.png",
                "sha256": "671cf7acb5f8b41153a802b96d980f06e62f98749c932be19019983310b69006",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/9x16-duration-900-frame-899.png",
                "sha256": "671cf7acb5f8b41153a802b96d980f06e62f98749c932be19019983310b69006",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 45.611979166666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-90-frame-10.png",
                "sha256": "0aa21485a7ec728b900cb1285f9a2628657fdd7808cab017fdfe2a5ce60363df",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-90-frame-89.png",
                "sha256": "888f7f8db3909f6fde9fc69a3c92746ecaa275cac9eb3dd36d28701181cc1a52",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-90-frame-79.png",
                "sha256": "888f7f8db3909f6fde9fc69a3c92746ecaa275cac9eb3dd36d28701181cc1a52",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 45.57823350694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-900-frame-15.png",
                "sha256": "3981988632035d1a33da4575ddcea140c3066235cfbb2522b5f1528a58121008",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-900-frame-102.png",
                "sha256": "888f7f8db3909f6fde9fc69a3c92746ecaa275cac9eb3dd36d28701181cc1a52",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-900-frame-792.png",
                "sha256": "888f7f8db3909f6fde9fc69a3c92746ecaa275cac9eb3dd36d28701181cc1a52",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ba-wipe/1x1-duration-900-frame-899.png",
                "sha256": "888f7f8db3909f6fde9fc69a3c92746ecaa275cac9eb3dd36d28701181cc1a52",
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
        "note": "A divider wipes a broken legacy spreadsheet into a clean dashboard that takes on each brand's colors."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ea55fbf09cbbcb618e98696b7ef94fc5b14a2c53d1f6f75a2afed58b47ec0639",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-wipe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-wipe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-wipe/16x9/detail.mp4",
      "bg": "#101012",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c111a95025b45e827e30722f0573e7ad083bd149a75dc2e7778a049eab5b1945",
        "loop": "67610b6d89c9f792235d91ace480a5cb732834bbe5a3326fb189673cfe666a7a",
        "detail": "04b4a83e86a03c56d531f818b348e6e0af105a80602dca05295b19b5ba741e65"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-wipe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-wipe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-wipe/9x16/detail.mp4",
      "bg": "#101012",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2c45d57029867c49bea131bae722910f9106a161d84beaf99553387a278d015d",
        "loop": "5442cf7556bd286517c026a8c75faa76637ba59b335037c90a8dd92b973adb2b",
        "detail": "c50fe2c29fbc2867948b5d184f1fb7630b0a60fe2a760d6c8e0ca1432a095e30"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-wipe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-wipe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-wipe/1x1/detail.mp4",
      "bg": "#101012",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8b04c21eccb156b6f1825f1976b6056ab332281ed5ae730065bc0155e8666f10",
        "loop": "4561c00171f32c5b8502d5e85b243a8054ddc3db86d74f180cb174565fdb6ec6",
        "detail": "5ce0f2e2e3be4004f1724f07ffb26db4d317d903677f5f2ff51ff7397c630076"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ea55fbf09cbbcb618e98696b7ef94fc5b14a2c53d1f6f75a2afed58b47ec0639/index.mjs",
    "sha256": "ea55fbf09cbbcb618e98696b7ef94fc5b14a2c53d1f6f75a2afed58b47ec0639",
    "bytes": 180920,
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
    "at": "2026-10-09T03:39:12.844Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
