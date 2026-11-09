// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "deck-shuffle-to-back"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "deck-shuffle-to-back",
    "deck",
    "shuffle",
    "cards"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "title2",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "prompt",
      "type": "text",
      "maxChars": 32,
      "role": "label"
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
      "target": "deck-shuffle-to-back",
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
    "ink": "#FFFFFF",
    "accent": "#2D4CF6",
    "secondary": "#C9D4FF",
    "paper": "#2D4CF6",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen Studio",
    "title": "One prompt.",
    "title2": "Every format.",
    "prompt": "Summarize Q3 for the board"
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "title2",
      "label": "Title 2",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 32,
      "role": "label"
    }
  ],
  "name": "Shuffled Card Deck",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-shuffle",
    "bundleSha256": "42d6f486a4650cee768bb6987567a97b1b9f42ac65d089bcad0ab585e4a4a5d7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:52:11.154Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-paper.png",
        "sha256": "daed141abd3bb52f2218c5a3c419ee9bb5f27d23d5d0733719946083433ff3d7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-night.png",
        "sha256": "996fc6e745f40b22dc156f3ac9e1a3e61cfc6a0801a63d9e966b5e042a936937"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-color.png",
        "sha256": "5bb676541c5ff83d7e51d52a1414acbc76e968159ebd0f22df073456a96518e6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-paper.png",
        "sha256": "68a3d1cd6eaa03abd3592a1b4a8d70490000339fb4bb8f701918766eaecb62af"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-night.png",
        "sha256": "253fb3ba08282c4873acd1849dd84e812b6c5769ea4778173cda77078daa31a9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-color.png",
        "sha256": "696d392b7a93f0c33372012908da764d5a5c01c8126eafe9c66a6000972d0874"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-paper.png",
        "sha256": "ed25ea6eceebfca791933c9af704a01b46b0501209823e51c7ddc5ee7390da0f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-night.png",
        "sha256": "1da087c5656f287fdd90a26267f6e3eb42b0ca9f311e5e703c23433f4c58fb27"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-color.png",
        "sha256": "24bb67f618bb1ea7dba708bd321d2199b393f8df6f772d2f5a1b1f0e3771c076"
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
          "mg-wall-shuffle--16x9",
          "mg-wall-shuffle--9x16",
          "mg-wall-shuffle--1x1"
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
            "paperNight": 15.54250759548611,
            "paperColor": 10.770806206597221,
            "region": {
              "left": 93,
              "top": 169,
              "width": 1597,
              "height": 764
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 24.595296223958332,
            "paperColor": 12.867051866319445,
            "region": {
              "left": 65,
              "top": 144,
              "width": 950,
              "height": 1676
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 16.602620442708332,
            "paperColor": 8.987250434027779,
            "region": {
              "left": 44,
              "top": 263,
              "width": 980,
              "height": 606
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
            "occupancy": 0.8339014296562248,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8339014296562248,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8339014296562248,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.088213384633689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.088213384633689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.088213384633689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7215935070873344,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7215935070873344,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7215935070873344,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.288845486111111,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.2914496527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-90-frame-10.png",
                "sha256": "9475e7f26d365b08088844e414968deae6c9643ec5ff75d186461023e021555b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-90-frame-89.png",
                "sha256": "c662f0eb8fc19103a2e890254bbfd7c68671d8f9e1ba9fa802f593bc06e89d06",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-90-frame-79.png",
                "sha256": "c662f0eb8fc19103a2e890254bbfd7c68671d8f9e1ba9fa802f593bc06e89d06",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.288845486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-900-frame-13.png",
                "sha256": "4cb3d35e74da851a642d28c4aa7fa1ad010c40774e53dc8405bef795710eb9e3",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-900-frame-90.png",
                "sha256": "c662f0eb8fc19103a2e890254bbfd7c68671d8f9e1ba9fa802f593bc06e89d06",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-900-frame-792.png",
                "sha256": "c662f0eb8fc19103a2e890254bbfd7c68671d8f9e1ba9fa802f593bc06e89d06",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/16x9-duration-900-frame-899.png",
                "sha256": "c662f0eb8fc19103a2e890254bbfd7c68671d8f9e1ba9fa802f593bc06e89d06",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.649631076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-90-frame-10.png",
                "sha256": "b6ea9c381fe01488ea061c9ccfffb546d3b621192385dbddd8667716f80f1cf3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-90-frame-89.png",
                "sha256": "db58aa23e422c82a86c4dd35fd64c38ee06cac63a6e6d28ba263c04ec70c27b4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-90-frame-79.png",
                "sha256": "db58aa23e422c82a86c4dd35fd64c38ee06cac63a6e6d28ba263c04ec70c27b4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.646592881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-900-frame-13.png",
                "sha256": "87fbb6520f9bfb3f2c051cec140025d07d8155701c997a05883b1da497e06a53",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-900-frame-90.png",
                "sha256": "db58aa23e422c82a86c4dd35fd64c38ee06cac63a6e6d28ba263c04ec70c27b4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-900-frame-792.png",
                "sha256": "db58aa23e422c82a86c4dd35fd64c38ee06cac63a6e6d28ba263c04ec70c27b4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/9x16-duration-900-frame-899.png",
                "sha256": "78b429065a9980a211f0a66d1b09b4d035e23d76ba9ffa72e75add36025d28eb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 3.722873263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-90-frame-10.png",
                "sha256": "447b212606ea948999bec6232fa37b5aab88edc99979ea6fb045e45767e7cc24",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-90-frame-89.png",
                "sha256": "46083d6700b7e1490f13dc01eed512dce518cfd2006c2e4f9c8a9f17164d41b1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-90-frame-79.png",
                "sha256": "46083d6700b7e1490f13dc01eed512dce518cfd2006c2e4f9c8a9f17164d41b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.7213541666666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-900-frame-13.png",
                "sha256": "719007a790d5f3d395e0073e02694bb9cf00a9335bab1cccef2983684f676bd8",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-900-frame-90.png",
                "sha256": "46083d6700b7e1490f13dc01eed512dce518cfd2006c2e4f9c8a9f17164d41b1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-900-frame-792.png",
                "sha256": "46083d6700b7e1490f13dc01eed512dce518cfd2006c2e4f9c8a9f17164d41b1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-wall-shuffle/1x1-duration-900-frame-899.png",
                "sha256": "46083d6700b7e1490f13dc01eed512dce518cfd2006c2e4f9c8a9f17164d41b1",
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
        "note": "Card deck shuffles through formats from one prompt; readable, rebrands distinct."
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
      "bundleSha256": "42d6f486a4650cee768bb6987567a97b1b9f42ac65d089bcad0ab585e4a4a5d7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/16x9/detail.mp4",
      "bg": "#4663f7",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "17069a883c94bb0cc56ff178f99ac9ed08fe0904a51e859949893804b724bc00",
        "loop": "e12cc70747ceaac5229f926427438a15f542deca878e4bf4b6e212a844ff5ed1",
        "detail": "d66c19e566bac7a4446d5e6b96a537670f826988aef5d852ba7c814002cda683"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/9x16/detail.mp4",
      "bg": "#4663f7",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fe2569fab835c37c2c98c43d7aba26492b011b313a55328762e343328d1b521f",
        "loop": "97749cc5ed004f1962e319ffcb948058845d670da07e3ea12de882366bbae700",
        "detail": "27bf65886173fbe97ff218af9e28b2703f37293ed2641392aee9af0e42ebacee"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-shuffle/1x1/detail.mp4",
      "bg": "#4663f7",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "10cee03bd5d541bfde32edbd588e556607188bef2546c8cca5a9bd543d78369e",
        "loop": "90f394957cd94db8935dfdc4985dada90f0a522c320c175c2a8ca641773a8945",
        "detail": "34d10ea87b2a7c698fef04397cd97c9544559e791481becfba6a2c65cdfff342"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/42d6f486a4650cee768bb6987567a97b1b9f42ac65d089bcad0ab585e4a4a5d7/index.mjs",
    "sha256": "42d6f486a4650cee768bb6987567a97b1b9f42ac65d089bcad0ab585e4a4a5d7",
    "bytes": 178286,
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
    "at": "2026-10-09T04:17:05.265Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
