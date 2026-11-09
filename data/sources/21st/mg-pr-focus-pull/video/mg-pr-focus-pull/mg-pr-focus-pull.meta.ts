// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "focus-pull-desk-to-phone"
  ],
  "energy": "calm",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "devices",
    "focus-pull-desk-to-phone",
    "focus",
    "mobile",
    "cross-device"
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
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "cta"
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
      "target": "focus-pull-desk-to-phone",
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
    "ink": "#F3EDE6",
    "accent": "#FF6A3D",
    "secondary": "#747579",
    "paper": "#120D0C",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Morning brief",
    "headline": "Your day, sharpened to three things",
    "cta": "Lumen on iPhone"
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
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Focus Pull To Phone",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-focus-pull",
    "bundleSha256": "a990d7aa0948ea72c574df706418eb35d8de874768438720acf46e1b83129833",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:37.122Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-paper.png",
        "sha256": "7a57a0dc50685c0c18ef4177fff0431deb05ffdac57c6953b35fbef9f79b86e5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-night.png",
        "sha256": "34ba11ec28b1d924ffde9d62e4905c0bc094bebd1e2e77571e0d7d3bf6624639"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-color.png",
        "sha256": "8d2b70196f3cdfa54c1803ea146c31ab3c95d6ddff9e9be09040bd0a93abef48"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-paper.png",
        "sha256": "e19ead105e5af1a71b199ecc85f26c1774724ea93dac5a4040edae9a91b28add"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-night.png",
        "sha256": "2306ed7d2ccb9a96abcedb428fcc9f964ec133bcdc524d0213db58f70d6b0237"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-color.png",
        "sha256": "55240f1c56c48e80ef16419a23c467709863b69b27f0bdb99414ccdbf4ba72a4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-paper.png",
        "sha256": "fdb836ee2a5d584a3305089aa2f76a475680f89edba508f8e371d1cbad771c1b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-night.png",
        "sha256": "17bd18806bbc0efd1b20e558b6367cac66aee5baebcf77977ec1182a666556fb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-color.png",
        "sha256": "757fee071679d26c32549ecc2d42975099cc78b12e7bad446e907f1a0fe7cb64"
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
          "mg-pr-focus-pull--16x9",
          "mg-pr-focus-pull--9x16",
          "mg-pr-focus-pull--1x1"
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
            "paperNight": 13.782606336805555,
            "paperColor": 4.697075737847222,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.67431640625,
            "paperColor": 10.628851996527779,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1558
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.85443793402778,
            "paperColor": 6.377034505208333,
            "region": {
              "left": 0,
              "top": 63,
              "width": 1074,
              "height": 950
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
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2006885283691668,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1500259826152686,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1500259826152686,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1485496976568408,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2397148502748152,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2397148502748152,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2397148502748152,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.25705295138889,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.283528645833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-90-frame-10.png",
                "sha256": "c0e7340129f387343eecd834602a907b135615d86d81835a077dc766d1383b7b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-90-frame-89.png",
                "sha256": "a7b03322109665442f4438401f16f024e2688e957c5d87cd4b1ab8d7d31efee0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-90-frame-79.png",
                "sha256": "a7b03322109665442f4438401f16f024e2688e957c5d87cd4b1ab8d7d31efee0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.25705295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-900-frame-13.png",
                "sha256": "8b9298275a9087befea86f3bf822049633051d67f24060eb1e02f7438bd1a92a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-900-frame-90.png",
                "sha256": "a7b03322109665442f4438401f16f024e2688e957c5d87cd4b1ab8d7d31efee0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-900-frame-792.png",
                "sha256": "a7b03322109665442f4438401f16f024e2688e957c5d87cd4b1ab8d7d31efee0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/16x9-duration-900-frame-899.png",
                "sha256": "68d676208be38f774fc5a6c3bc99d660bb0e87d992fb3db3010029ca47cb7764",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.483940972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-90-frame-10.png",
                "sha256": "4e3f30d6b18aff5c105ebbabf546883440c0e5caae52839b871f63f6fbdbeb78",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-90-frame-89.png",
                "sha256": "e006f0e210a248ab98a90f143eae565cc8d55b1b25b01165dc0cda690d1a9d88",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-90-frame-79.png",
                "sha256": "ee17ece7dde677885e3fccffb8481afa117165524c88ac31180532dbe1ece8fd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.384440104166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-900-frame-13.png",
                "sha256": "49478bc1b830ff1a12c2b2c45982a465e295826a544c36addf7f5f306750241f",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-900-frame-90.png",
                "sha256": "ee17ece7dde677885e3fccffb8481afa117165524c88ac31180532dbe1ece8fd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-900-frame-792.png",
                "sha256": "ee17ece7dde677885e3fccffb8481afa117165524c88ac31180532dbe1ece8fd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/9x16-duration-900-frame-899.png",
                "sha256": "ee17ece7dde677885e3fccffb8481afa117165524c88ac31180532dbe1ece8fd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.331597222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-90-frame-10.png",
                "sha256": "c7a1460f92ef0fa224232339d544f828b618bb5e63cf39cb83ac532ce2db31a5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-90-frame-89.png",
                "sha256": "984a01a398ea94673fec1a575228d80c8e4445b61009c95d23cfeea9c4aac178",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-90-frame-79.png",
                "sha256": "984a01a398ea94673fec1a575228d80c8e4445b61009c95d23cfeea9c4aac178",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.28396267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-900-frame-13.png",
                "sha256": "45f21ba9202f5ee7fe7fa306362789f84936461633e5844fbc80772884466d67",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-900-frame-90.png",
                "sha256": "984a01a398ea94673fec1a575228d80c8e4445b61009c95d23cfeea9c4aac178",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-900-frame-792.png",
                "sha256": "984a01a398ea94673fec1a575228d80c8e4445b61009c95d23cfeea9c4aac178",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-pr-focus-pull/1x1-duration-900-frame-899.png",
                "sha256": "984a01a398ea94673fec1a575228d80c8e4445b61009c95d23cfeea9c4aac178",
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
        "note": "Focus pulls from desktop to phone; headline readable, rebrands distinct."
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
      "bundleSha256": "a990d7aa0948ea72c574df706418eb35d8de874768438720acf46e1b83129833",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/16x9/detail.mp4",
      "bg": "#120d0c",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "39d446ff7106f84a277b71f979f2e5fd6bdf25f8cf85f11e168c93b7dff3a1ea",
        "loop": "02cfe46c245b4a2c8be23cfe5dd57ba6bd0fafc577c635d28256358bf666f4c7",
        "detail": "c5375ff968448d048c140501f75483864ccc3aa642979bd2afcc972aaa10fcef"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/9x16/detail.mp4",
      "bg": "#120d0c",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0d68cc6cb8716253dea370cc6c0f5263662a320cf272ce38e4352c3936f25f64",
        "loop": "8f5550fa5d1739daf3b98178173ce02f22ae614863538f0c7a75798f8ee7254a",
        "detail": "cfda11835d905d13737071d50ea17ac984eb6dbe82a609494407a079fc24d493"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-focus-pull/1x1/detail.mp4",
      "bg": "#120d0c",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "657c053fe9918a8ac98dcde6af27fea1614fc1de4a86f7e18b83ca8a72c8081b",
        "loop": "d61acac2cbae79551ddcf8669a2bb0078d64a1dc63e41b363469dc416103217e",
        "detail": "2c6ede7d0083a1a3ea9b9668377da38c34d951a21cf77474dccd1b2a5eca36af"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a990d7aa0948ea72c574df706418eb35d8de874768438720acf46e1b83129833/index.mjs",
    "sha256": "a990d7aa0948ea72c574df706418eb35d8de874768438720acf46e1b83129833",
    "bytes": 175055,
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
    "at": "2026-10-09T04:04:58.127Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
