// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "captions",
  "category": "captions/karaoke",
  "tags": [
    "captions",
    "subtitles",
    "karaoke",
    "word highlight",
    "tiktok",
    "reels"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 10,
      "max": 18000
    },
    "stretch": "hold",
    "phases": {
      "in": 5,
      "out": 0
    },
    "markers": {
      "settled": 30
    },
    "beats": [
      3,
      12,
      21,
      30,
      39,
      48
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": []
  },
  "slots": [
    {
      "key": "sample",
      "type": "text",
      "maxChars": 120,
      "lines": 2,
      "role": "body"
    }
  ],
  "brand": {
    "highlight": "colors.primary",
    "fontFamily": "fonts.heading",
    "color": "colors.text"
  },
  "motionBeats": [
    {
      "target": "word",
      "prop": "highlight",
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
      "marker": "settled"
    },
    "hover": [
      0,
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/showcase.tsx (Subs), factor-marketplace/remotion/components/mixed-text.tsx (Subtitles)"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "portraitLayout": "stack",
    "color": "#FFFFFF",
    "highlight": "#3D63FF",
    "fontFamily": "Geist",
    "style": "pill",
    "sample": "Ship the component, not the screenshot."
  },
  "fields": [
    {
      "key": "portraitLayout",
      "label": "Portrait layout",
      "type": "select",
      "options": [
        "stack",
        "subtitle"
      ]
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "style",
      "label": "Style",
      "type": "select",
      "options": [
        "pill",
        "plain"
      ]
    },
    {
      "key": "sample",
      "label": "Sample",
      "type": "text",
      "max": 120,
      "role": "body"
    }
  ],
  "name": "Karaoke Captions",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "karaoke-captions",
    "bundleSha256": "5ea28f08dddedf565e6fa86cea9f0c248c0a8885d35f4e93d398871f8af5abfb",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:00.471Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-paper.png",
        "sha256": "6b13f5a45e85b2cceb953c25ae52fdfaf9965a7b5dd897fab52acb7abc0be7e0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-night.png",
        "sha256": "9bdf5646b31f646ad8717491688c5ded7ee79a5a915392d1b0208d45b9e05b63"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-color.png",
        "sha256": "697552499a00d95a8f8e401a69e574e8c01ca905e4459bc0876136cf775d16c2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-paper.png",
        "sha256": "130007176a167b036e209051ca9d57802fcb22a6847b50b2853bc08d901307e2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-night.png",
        "sha256": "8f749afe4a1aea34f0acaad446880df117f59b440f33691e170e1d3c87db63b0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-color.png",
        "sha256": "d93dd0ddec8ae481a4367c2da0cb62a8083622e38cfafef4010c1e41b1d8ddf3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-paper.png",
        "sha256": "0869baa33ee2bc10e8f1811dfd511d24b2bc88c9c12d989736a8d4046d0bc63a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-night.png",
        "sha256": "40f84ba0b6abc064dca29fa6ce8ea9f7bbffb2a40ea9711cbacfb48cf9817f16"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-color.png",
        "sha256": "da6bf1c2f6cbf410ede7469ada4b0a0a7da385621889ac45a3c94843da6ef3d6"
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
          "karaoke-captions--16x9",
          "karaoke-captions--9x16",
          "karaoke-captions--1x1"
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
            "paperNight": 60.504177517361114,
            "paperColor": 37.052218967013886,
            "region": {
              "left": 364,
              "top": 898,
              "width": 1192,
              "height": 81
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 38.77728949652778,
            "paperColor": 20.949951171875,
            "region": {
              "left": 142,
              "top": 253,
              "width": 799,
              "height": 1406
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.343532986111114,
            "paperColor": 45.610812717013886,
            "region": {
              "left": 121,
              "top": 817,
              "width": 839,
              "height": 162
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
            "occupancy": 0.0652702487244898,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06598993764172337,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.045894008645124724,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7639781494516532,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7624765762786597,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.760696832745444,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1453976652389351,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1478168284917991,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.08158934870244396,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.248806423611111,
        "frames": [
          4,
          30,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 10,
            "averageChannelDifference": 5.796115451388889,
            "retainedAlpha": 0.9850993377483444,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-10-frame-1.png",
                "sha256": "4e99ec08393ecfaff71e5d5b6a6d6de38e7ae11e65e8d53f6bf736d19dc088fe",
                "alphaMass": 1470
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-10-frame-9.png",
                "sha256": "9fd7ef7759f3523d36bd1761dc0e2996e79740d13d1cb7b647fd1a184b8368b7",
                "alphaMass": 7248
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-10-frame-8.png",
                "sha256": "efbffc4a202e81783ded25dc9cbce9ccbff3bedf458c60ab9075b8eed5da15d5",
                "alphaMass": 7140
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 18000,
            "averageChannelDifference": 4.248806423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-18000-frame-4.png",
                "sha256": "f8524fea6e48bd0ff05770f7011c32ab38f694512afe24d6793d875f0dc2b7e7",
                "alphaMass": 6235
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-18000-frame-30.png",
                "sha256": "7c3e455faefa6583b5ddacdd68f31d05d08344d67eeda2ebb89f6b94c945a943",
                "alphaMass": 7357
              },
              {
                "frame": 15840,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-18000-frame-15840.png",
                "sha256": "1ad212ac937b55f15ea96c12a2a9ce813c3a007180a15e526c3899398966f62b",
                "alphaMass": 7339
              },
              {
                "frame": 17999,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/16x9-duration-18000-frame-17999.png",
                "sha256": "1ad212ac937b55f15ea96c12a2a9ce813c3a007180a15e526c3899398966f62b",
                "alphaMass": 7339
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 10,
            "averageChannelDifference": 35.6455078125,
            "retainedAlpha": 0.9769490894424968,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-10-frame-1.png",
                "sha256": "b8334d31418baf16624f4ee3607966b3e2d716a0c8015c0975e1886990c24ae7",
                "alphaMass": 7178
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-10-frame-9.png",
                "sha256": "0b33b51d5b763bfe70d4941e1ac8d2eddbdaa865a8bfce20c5477cd4ed496e73",
                "alphaMass": 64466
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-10-frame-8.png",
                "sha256": "e097f794f32bcbf12a8848c0aa806e37eae24ef6fccf5c199981e3cdb3391def",
                "alphaMass": 62980
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 18000,
            "averageChannelDifference": 40.4072265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-18000-frame-4.png",
                "sha256": "300cce88f4f961bf6c23cd947b78f65a696bc505e24bd0d92310d1f9750292ce",
                "alphaMass": 51109
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-18000-frame-30.png",
                "sha256": "626d49a00be90a2fe53681355ab0cfd7c521163ab28c578f5c889407fcefaba6",
                "alphaMass": 57640
              },
              {
                "frame": 15840,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-18000-frame-15840.png",
                "sha256": "53819158175cb854759ec8d059611cac29d7ae9ef3138ea25492a8b719c5aa19",
                "alphaMass": 34656
              },
              {
                "frame": 17999,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/9x16-duration-18000-frame-17999.png",
                "sha256": "53819158175cb854759ec8d059611cac29d7ae9ef3138ea25492a8b719c5aa19",
                "alphaMass": 34656
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 10,
            "averageChannelDifference": 6.314236111111111,
            "retainedAlpha": 0.9847168597168597,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-10-frame-1.png",
                "sha256": "b08433a643ef463f89f8f02a43c5a406acf1f0c7a8105f01ebf0ee3033dc99c5",
                "alphaMass": 2565
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-10-frame-9.png",
                "sha256": "646a5aa459421279fe2abdeb1c5ff409705ee83a26201fec2bba809f1f6ad5cf",
                "alphaMass": 12432
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-10-frame-8.png",
                "sha256": "ddcae2b5bd2aa1f469240ad175c487364230b722dc49777bc26d9d27f254db9a",
                "alphaMass": 12242
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 18000,
            "averageChannelDifference": 6.811306423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-18000-frame-4.png",
                "sha256": "8e8694c4044828124358992e8f91b867695ce4cca37027f7ee97b70c6af7ebbc",
                "alphaMass": 10796
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-18000-frame-30.png",
                "sha256": "8c42f54dd627f26c3049caa852d10508dee9ded8a09a17bcc0ecd8a6c63bff8a",
                "alphaMass": 12787
              },
              {
                "frame": 15840,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-18000-frame-15840.png",
                "sha256": "97718c8e54487e9b37271016101defb0fb66a9e8f4d2f8fd347b49a3ae8d959e",
                "alphaMass": 12709
              },
              {
                "frame": 17999,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/karaoke-captions/1x1-duration-18000-frame-17999.png",
                "sha256": "97718c8e54487e9b37271016101defb0fb66a9e8f4d2f8fd347b49a3ae8d959e",
                "alphaMass": 12709
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Caption line along the foot with the spoken word highlighted; a caption/phrase overlay."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5ea28f08dddedf565e6fa86cea9f0c248c0a8885d35f4e93d398871f8af5abfb",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.947553Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/karaoke-captions/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/karaoke-captions/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/karaoke-captions/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "cb4ba5746a8799b3bc30335a6c52753111e48ba0d2f5baae27905808e8eef384",
        "loop": "e3eea1ba998d92d211e601380dc94f2c6d9e5349be403dd4a60864331a920aaf",
        "detail": "5f354aef33d88d33cdc08768dde73b2d31945eea379cd75f14f704fafc0776d4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/karaoke-captions/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/karaoke-captions/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/karaoke-captions/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "862659c5a83d62e780e3d672e25fed2ce86d6779624087beab31f6fd753f798f",
        "loop": "e6755e69a0fcb36033745b45123ae6e6edab948e72180e4bf170e34d0b376233",
        "detail": "7f3327975ba65118f76af01570204a2c307fdd8b976db27332f665e6f30c075e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/karaoke-captions/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/karaoke-captions/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/karaoke-captions/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "89e3b417816cb11e3fa6417b48261a4a6dde1f52057e7faa2138124054d6b545",
        "loop": "46ed02ec10052f32ae46220e57feff4fc7905798a09d1d81307a1c1542906377",
        "detail": "25cae568647c77c6ccb008ee59531e176a592ed254943f32354a4cd8c9f6cb04"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5ea28f08dddedf565e6fa86cea9f0c248c0a8885d35f4e93d398871f8af5abfb/index.mjs",
    "sha256": "5ea28f08dddedf565e6fa86cea9f0c248c0a8885d35f4e93d398871f8af5abfb",
    "bytes": 159312,
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
    "at": "2026-10-07T02:23:50.412Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
