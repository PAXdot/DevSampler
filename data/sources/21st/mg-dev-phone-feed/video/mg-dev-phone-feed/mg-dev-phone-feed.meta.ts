// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "feed-scroll-notification-drop"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "feed-scroll-notification-drop",
    "phone",
    "mobile-app",
    "notification"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 60,
      "role": "caption"
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
      "target": "feed-scroll-notification-drop",
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
    "ink": "#FFF7F2",
    "accent": "#3D63FF",
    "secondary": "#FF9A55",
    "paper": "#F2486C",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen mobile",
    "headline": "Approvals land the moment they happen",
    "caption": "Your team's activity, in your pocket"
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
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 60,
      "role": "caption"
    }
  ],
  "name": "Phone Feed Notification",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-phone-feed",
    "bundleSha256": "ee4be30a7b05a7fa299db9f34cc8237b9929325060903ea71237bca09e377ef1",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:46:16.073Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-paper.png",
        "sha256": "24628510a03a7111861343ad212e817c7a8362bb733fe9369dcd16c8c0ea134a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-night.png",
        "sha256": "81a7eb15019a7e0cfd06ad07b70e07429930632e420cd435929b317970420b8f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-color.png",
        "sha256": "8e4d8efb74470b2dba1418d9a893eaf336b1f152470d7e3e3db85449524d3892"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-paper.png",
        "sha256": "391e21b38120b33bd8624ad850739d202a7b51f41f5a89aaa3af581a9ec3bfee"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-night.png",
        "sha256": "e56f62c4e94690d43286572dc0c4a07dc044ab9505c09d525d50a2a67981397a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-color.png",
        "sha256": "1c8253b6e38124a0371c13cd4d7187b87047e036bb3177b79d0e87902d557e9e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-paper.png",
        "sha256": "b74faeed7bbc6fe8034a623ba741d9926c2d70fc1ce89ec424a5ebf950c7cae9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-night.png",
        "sha256": "4bb057ce28417508840427e9cf33d9e756ba71c501c63047923a71481578f704"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-color.png",
        "sha256": "c1eba60355a2a1af53862bfb8f5e7e830a2570a1cad7b0d362a1090510afa3af"
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
          "mg-dev-phone-feed--16x9",
          "mg-dev-phone-feed--9x16",
          "mg-dev-phone-feed--1x1"
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
            "paperNight": 20.025987413194443,
            "paperColor": 9.058349609375,
            "region": {
              "left": 103,
              "top": 111,
              "width": 1489,
              "height": 935
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.99595811631944,
            "paperColor": 15.384819878472221,
            "region": {
              "left": 78,
              "top": 168,
              "width": 798,
              "height": 1603
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 20.783827039930557,
            "paperColor": 9.23605685763889,
            "region": {
              "left": 68,
              "top": 127,
              "width": 966,
              "height": 884
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
            "occupancy": 0.9515305849062878,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9515305849062878,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9515305849062878,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8731938473691948,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8742846579218109,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8359900994862968,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037584100855706,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037584100855706,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037584100855706,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.070855034722222,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.162651909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-90-frame-10.png",
                "sha256": "d9c387e8f62783b72cdc9389ec4c3b5b9503aa9a890d892a80119dab24e19448",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-90-frame-89.png",
                "sha256": "7d87574e90e2c5e9d455feed922a00721bfb3c74e364efa5bb5cd7722618ad6d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-90-frame-79.png",
                "sha256": "7d87574e90e2c5e9d455feed922a00721bfb3c74e364efa5bb5cd7722618ad6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.070855034722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-900-frame-15.png",
                "sha256": "3634da866c79812417d6e5937a465d00a92f4594c030f6b8e0c738df4efccaa6",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-900-frame-102.png",
                "sha256": "7d87574e90e2c5e9d455feed922a00721bfb3c74e364efa5bb5cd7722618ad6d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-900-frame-792.png",
                "sha256": "7d87574e90e2c5e9d455feed922a00721bfb3c74e364efa5bb5cd7722618ad6d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/16x9-duration-900-frame-899.png",
                "sha256": "7d87574e90e2c5e9d455feed922a00721bfb3c74e364efa5bb5cd7722618ad6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.110568576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-90-frame-10.png",
                "sha256": "7569d686c574272b15e26f31131c46f673498084fe8860f3f3012a952960b806",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-90-frame-89.png",
                "sha256": "e5b9ce39ccaa1d52be9a330627cba26384b16ead28a90ba7b896f571904b61a5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-90-frame-79.png",
                "sha256": "bf7e9e2f8a6baf8037b0a6ecaa330afb39f93ec8e7d216df89217085c14f7d61",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.9931640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-900-frame-15.png",
                "sha256": "6dec188f0b9198766f7fc7d5411869876f1c0874a5b6650b5dfa7701b9c654bc",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-900-frame-102.png",
                "sha256": "bf7e9e2f8a6baf8037b0a6ecaa330afb39f93ec8e7d216df89217085c14f7d61",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-900-frame-792.png",
                "sha256": "bf7e9e2f8a6baf8037b0a6ecaa330afb39f93ec8e7d216df89217085c14f7d61",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/9x16-duration-900-frame-899.png",
                "sha256": "bf7e9e2f8a6baf8037b0a6ecaa330afb39f93ec8e7d216df89217085c14f7d61",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.92458767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-90-frame-10.png",
                "sha256": "8ac436d73eab3c8fa14897bfdecc1797f71ff5a762e834c3da9ff6475952df0a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-90-frame-89.png",
                "sha256": "fe7134a00133046ffae9ff1c3cba7de72edff9296326c555b51fac44e2266b81",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-90-frame-79.png",
                "sha256": "fe7134a00133046ffae9ff1c3cba7de72edff9296326c555b51fac44e2266b81",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-900-frame-15.png",
                "sha256": "b5d79c7e1c2789e8778676c36eab8168fb92e11b08149837892118f714cdf937",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-900-frame-102.png",
                "sha256": "fe7134a00133046ffae9ff1c3cba7de72edff9296326c555b51fac44e2266b81",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-900-frame-792.png",
                "sha256": "fe7134a00133046ffae9ff1c3cba7de72edff9296326c555b51fac44e2266b81",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-dev-phone-feed/1x1-duration-900-frame-899.png",
                "sha256": "fe7134a00133046ffae9ff1c3cba7de72edff9296326c555b51fac44e2266b81",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A phone feed receives an approval notification on a coral backdrop; phone cards use blue and sky, no purple."
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
      "bundleSha256": "ee4be30a7b05a7fa299db9f34cc8237b9929325060903ea71237bca09e377ef1",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/16x9/detail.mp4",
      "bg": "#ffaa71",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "37fa7874512d6c7a9f3be6c47b7c32f0121329c3e300b042ef80f8fcabed8c6a",
        "loop": "0c966f142649a98489dd032510a12a3d223334b08e2b17e5da0c8428a74a0ff8",
        "detail": "bd1f1325584735e10a07e5bf7f4dfe217fa423624556380e02af06cc64dbb18b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/9x16/detail.mp4",
      "bg": "#ffaa71",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2f93380fcfa6a159b257fd649c0fce0ac8b99025aaf618a18586f1f1c9dcb0d9",
        "loop": "c7186e05edf0ac935fb01bb491d7953e4e03fd9b4d1e932bc2546beeea28f960",
        "detail": "4ceea86b1a7b74a803e9765b5195d9f15176ec6c2b95e471adc18cbc5ad6053e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-phone-feed/1x1/detail.mp4",
      "bg": "#ffaa71",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "53936ee8239b982144ec8c9a544c15c5ff7aa839cc6d0c7f63c4fa78d0c15e7d",
        "loop": "638c2369e0cf1e48dc65d2f0d2aff97cb43bb5bef3fda4ce10a9a351ccbb5b26",
        "detail": "ff708068522abda084e602d0d981503096282eb827f19d6b5d3ecc884d9e2e79"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ee4be30a7b05a7fa299db9f34cc8237b9929325060903ea71237bca09e377ef1/index.mjs",
    "sha256": "ee4be30a7b05a7fa299db9f34cc8237b9929325060903ea71237bca09e377ef1",
    "bytes": 177720,
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
    "at": "2026-10-09T03:53:36.117Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
