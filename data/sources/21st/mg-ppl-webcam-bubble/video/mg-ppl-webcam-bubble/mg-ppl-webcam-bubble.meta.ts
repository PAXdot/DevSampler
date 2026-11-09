// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "webcam-bubble-dodges-cursor"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "webcam-bubble-dodges-cursor",
    "webcam",
    "presenter",
    "walkthrough"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 30,
      "role": "label"
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
      "target": "webcam-bubble-dodges-cursor",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#1F1C17",
    "accent": "#3D63FF",
    "secondary": "#FF8A5C",
    "paper": "#FBFAF7",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "kicker": "Live walkthrough",
    "name": "Maya Okafor",
    "role": "Head of Product, Lumen"
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 30,
      "role": "label"
    }
  ],
  "name": "Webcam Bubble Walkthrough",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ppl-webcam-bubble",
    "bundleSha256": "36c1da29968a82ef8584050d6b0879ccaa81fa14ff1d9b410a314749d0df1d6d",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:09.999Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-paper.png",
        "sha256": "00b8ce5a6955371b5e339af0eb4f7a4e6f54a63b58f6006f76f9daa0c4814ccf"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-night.png",
        "sha256": "076a5861ec557bd85e55e7c302fb179ed7069325b12a366e0a1e1c3986cb4f08"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-color.png",
        "sha256": "18623205b824a9d3850d731f28f585f77ccae4a9f8ad89d2d516ff12e8442f29"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-paper.png",
        "sha256": "5ed8001c9b1d08118c8156cb4b1c347db6f38e667db8e42a612ab9f098719275"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-night.png",
        "sha256": "82a2fb057470815081922fdf72d002d24e880ce5a4d95d725ea1bbc268ecd1f0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-color.png",
        "sha256": "64633f9bb6278c323b41fe40bdbedb7427b7d9655f46e801b67a693beea21d6c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-paper.png",
        "sha256": "f20d076771dbdf2c8df00d847872acc5f17f2c9b8d926664460649240673b0c3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-night.png",
        "sha256": "97240134605c1c88dffeb05c06abf1fc950b2b31d930dcbdee253f1a45f7ca9f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-color.png",
        "sha256": "bcc775d2130175395ca114ef21291dbe5d6b1cf8aecfdfcd3f321695d56604a1"
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
          "mg-ppl-webcam-bubble--16x9",
          "mg-ppl-webcam-bubble--9x16",
          "mg-ppl-webcam-bubble--1x1"
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
            "paperNight": 8.777018229166666,
            "paperColor": 3.0332573784722223,
            "region": {
              "left": 132,
              "top": 23,
              "width": 987,
              "height": 1057
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.88178168402778,
            "paperColor": 9.060926649305555,
            "region": {
              "left": 44,
              "top": 134,
              "width": 915,
              "height": 1707
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.25344509548611,
            "paperColor": 5.211697048611111,
            "region": {
              "left": 40,
              "top": 49,
              "width": 640,
              "height": 1004
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
            "occupancy": 0.713031282150206,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7108640138154029,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7108640138154029,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0675078046264805,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0675078046264805,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0675078046264805,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.780742109372327,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.780742109372327,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7734226520969615,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.171766493055557,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 20.223307291666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-90-frame-10.png",
                "sha256": "8fac9474c2056c8fe34a15789489f7cc073606c17a8b0c1bdee6d618b652c083",
                "alphaMass": 26519
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-90-frame-89.png",
                "sha256": "6ead0350efeb3a25729b9fd796f8e410b3486a406404e6074dcc71fb4505a526",
                "alphaMass": 34355
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-90-frame-79.png",
                "sha256": "6ead0350efeb3a25729b9fd796f8e410b3486a406404e6074dcc71fb4505a526",
                "alphaMass": 34355
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 20.171766493055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-900-frame-14.png",
                "sha256": "573dc4585e06456251041752cd0f2078e73d9fa8eeffc6e074705cae2800b3e9",
                "alphaMass": 26529
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-900-frame-96.png",
                "sha256": "6ead0350efeb3a25729b9fd796f8e410b3486a406404e6074dcc71fb4505a526",
                "alphaMass": 34355
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-900-frame-792.png",
                "sha256": "6ead0350efeb3a25729b9fd796f8e410b3486a406404e6074dcc71fb4505a526",
                "alphaMass": 34355
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/16x9-duration-900-frame-899.png",
                "sha256": "6ead0350efeb3a25729b9fd796f8e410b3486a406404e6074dcc71fb4505a526",
                "alphaMass": 34355
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 21.502278645833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-90-frame-10.png",
                "sha256": "21c564b3740e2f24fc5249b1f65f58be7572822051291997a975ca178c326a19",
                "alphaMass": 34703
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-90-frame-89.png",
                "sha256": "fe548a527383de4c32cf473ff824c9565e590fe307c2e6f3b63d414ca6859918",
                "alphaMass": 104889
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-90-frame-79.png",
                "sha256": "fe548a527383de4c32cf473ff824c9565e590fe307c2e6f3b63d414ca6859918",
                "alphaMass": 104889
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 20.4873046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-900-frame-14.png",
                "sha256": "0fc7efe231261b5c7d2e88dbbd9560e794b2a51885b19e89b67957e3fc287c35",
                "alphaMass": 39079
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-900-frame-96.png",
                "sha256": "fe548a527383de4c32cf473ff824c9565e590fe307c2e6f3b63d414ca6859918",
                "alphaMass": 104889
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-900-frame-792.png",
                "sha256": "fe548a527383de4c32cf473ff824c9565e590fe307c2e6f3b63d414ca6859918",
                "alphaMass": 104889
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/9x16-duration-900-frame-899.png",
                "sha256": "fe548a527383de4c32cf473ff824c9565e590fe307c2e6f3b63d414ca6859918",
                "alphaMass": 104889
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.866644965277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-90-frame-10.png",
                "sha256": "286bf1fb17d161e7b926622093ff2dfcb9e3fbee4503215802d8717962091d56",
                "alphaMass": 18132
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-90-frame-89.png",
                "sha256": "59cc44343f2bfdf6e8f338374173b4486d0f04a26c16fbf9df9dcebfd6228cc7",
                "alphaMass": 53460
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-90-frame-79.png",
                "sha256": "59cc44343f2bfdf6e8f338374173b4486d0f04a26c16fbf9df9dcebfd6228cc7",
                "alphaMass": 53460
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.732096354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-900-frame-14.png",
                "sha256": "9642fa5a325df5a773b41ea096c7b8e89f616141fd39fe2053fd55571b1d1d68",
                "alphaMass": 21483
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-900-frame-96.png",
                "sha256": "59cc44343f2bfdf6e8f338374173b4486d0f04a26c16fbf9df9dcebfd6228cc7",
                "alphaMass": 53460
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-900-frame-792.png",
                "sha256": "59cc44343f2bfdf6e8f338374173b4486d0f04a26c16fbf9df9dcebfd6228cc7",
                "alphaMass": 53460
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-ppl-webcam-bubble/1x1-duration-900-frame-899.png",
                "sha256": "59cc44343f2bfdf6e8f338374173b4486d0f04a26c16fbf9df9dcebfd6228cc7",
                "alphaMass": 53460
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
        "note": "Webcam bubble with name card and live badge as a transparent overlay; rebrands distinct."
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
      "bundleSha256": "36c1da29968a82ef8584050d6b0879ccaa81fa14ff1d9b410a314749d0df1d6d",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c966fe55110ce6f4a4c224cb3fe0086d666518fce8bfb530682aaff857cba6b8",
        "loop": "26825904dc03a5994755be21d85bafb12fe242d18168d717459f64ac6303f4f3",
        "detail": "19e30fc92be7a35e15be570803cf5bf1ccb94f9a896dc04f1a9a5c1eb1dca39b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "95b1e7a2d51e4b2e63b4ade40b75d04f6d483155601d5bb72c82a8c751282c0b",
        "loop": "a19b2bb48879b16eaba71b38d3288eaca5c3054df1b336abed38af9baf156e27",
        "detail": "a5325cedfaa4f0ddeacff13e1e7ef04ecb23d214e46be018293f8c8cc7e773df"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-webcam-bubble/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3f006a88784f0014d8f676dc11c76472ac6a6d2743aaad7adff91bcba1314dc6",
        "loop": "c61de9c676e0ad911784efc3f95782aaab92a186429d575a344db540f5eb2dec",
        "detail": "fd765c2ed7f9c615675a534d8c5ded4a79bd376567ee3ee8e4c58bf99648c750"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/36c1da29968a82ef8584050d6b0879ccaa81fa14ff1d9b410a314749d0df1d6d/index.mjs",
    "sha256": "36c1da29968a82ef8584050d6b0879ccaa81fa14ff1d9b410a314749d0df1d6d",
    "bytes": 180135,
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
      "overflow": true,
      "transparent": true
    },
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
    }
  },
  "intake": {
    "at": "2026-10-09T04:02:07.708Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
