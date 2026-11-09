// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand/integrations",
  "tags": [
    "logos",
    "integrations",
    "logo cloud",
    "icons",
    "app icons",
    "ecosystem",
    "keynote",
    "scene"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 120,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 112,
      "out": 0
    },
    "markers": {
      "settled": 112,
      "swap": 78
    },
    "beats": [
      4,
      12,
      78,
      84
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "phrase",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "phrase2",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "logos",
      "type": "list",
      "role": "logos"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "phrase",
      "prop": "words",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "tiles",
      "prop": "scale",
      "from": "0.6",
      "settledBy": 60,
      "easing": "spring"
    },
    {
      "target": "phrase2",
      "prop": "words",
      "settledBy": 112,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V15, research 2026-10-05)"
  },
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "phrase": "Works with the tools you *already* use",
    "phrase2": "Now they *talk* to each other",
    "logos": [],
    "tiles": 10,
    "accent": "#3D63FF",
    "color": "#0A0A0A",
    "background": "#F7F8FA",
    "fontFamily": "Inter"
  },
  "fields": [
    {
      "key": "phrase",
      "label": "Phrase",
      "type": "text",
      "max": 60,
      "role": "headline"
    },
    {
      "key": "phrase2",
      "label": "Phrase 2",
      "type": "text",
      "max": 60,
      "role": "subline"
    },
    {
      "key": "logos",
      "label": "Logos",
      "type": "list",
      "max": 12,
      "role": "logos"
    },
    {
      "key": "tiles",
      "label": "Tiles",
      "type": "number",
      "step": 1,
      "min": 4,
      "max": 12
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Logo Cloud Burst",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "logo-cloud-burst",
    "bundleSha256": "eb54bc3087aa452ce14cfb8221f9420d692b9892f6dc636b9086d23e9bca78e7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:08.085Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-paper.png",
        "sha256": "aa9c636bef0b4c3f608ec9f1c7225dc2c239fdc59c73ea9393f8b494fc9718e5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-night.png",
        "sha256": "0fcec3b0bb7c8db8958abb17138c490089e9afa404d7f1e1de3e69619e50a1e0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-color.png",
        "sha256": "fafc1104ceaeeff84ddbfb2534b0e1de1b65ad035f6d9ce409b34db15ff856e6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-paper.png",
        "sha256": "e7e48834cb25ef145334a0d4c606049af7f794f5cc46ae698d175d655fc7fb9d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-night.png",
        "sha256": "bcaa83e3e26a723d0616caf5240b491393a7c1115792b7f7b9db80e8dcfb79a3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-color.png",
        "sha256": "e5f3312ba49e093c9e0806b1ddf5bf4343cec0be80f616ec7ca210bfdc708ca6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-paper.png",
        "sha256": "2a1dc741c5d7fe85737d71993d5bc911850a27efd9558145bc05c5b0181f11e6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-night.png",
        "sha256": "e3db69c1fb7307985774cad9fcb814dec54086c9975531f1082dba340c28b77e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-color.png",
        "sha256": "35c90e934090062f78078b171e2e21edb0514c27036726d7110f8316181ab678"
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
          "logo-cloud-burst--16x9",
          "logo-cloud-burst--9x16",
          "logo-cloud-burst--1x1"
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
            "paperNight": 22.21389431423611,
            "paperColor": 32.88202582465278,
            "region": {
              "left": 298,
              "top": 155,
              "width": 1385,
              "height": 781
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 23.246202256944443,
            "paperColor": 33.579562717013886,
            "region": {
              "left": 145,
              "top": 324,
              "width": 824,
              "height": 1279
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.50933159722222,
            "paperColor": 27.14008246527778,
            "region": {
              "left": 143,
              "top": 155,
              "width": 834,
              "height": 780
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
            "occupancy": 0.7392941181745334,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7392941181745334,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7392941181745334,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7203013021052044,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7203013021052044,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7203013021052044,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7904139021863891,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7904139021863891,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7904139021863891,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.6949869791666665,
        "frames": [
          16,
          112,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 120,
            "averageChannelDifference": 2.6561414930555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-120-frame-14.png",
                "sha256": "45e8fdd0e45884fdf7b5b31c65b50e8fa8e5c784262a9821cd7eb3b1ec735281",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-120-frame-112.png",
                "sha256": "8218e2b3294a419844796c6a948ea4b4267f2403ad30bda55e239f7463026d77",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-120-frame-105.png",
                "sha256": "32f5b119cef7412831f57960007424fe674348a8f8c8b77f8b2641ab1add5f06",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-120-frame-119.png",
                "sha256": "aa71f63e831f1cdaada40a5b4e94866ae6b4a4ca5f9873c7d105352099e6c01e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.6949869791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-600-frame-16.png",
                "sha256": "e7ef4ee0dd9b55e872e2ec066283e188a13f1dacf8e8abe33e1c5986951d8e86",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-600-frame-112.png",
                "sha256": "8218e2b3294a419844796c6a948ea4b4267f2403ad30bda55e239f7463026d77",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-600-frame-528.png",
                "sha256": "732e4dd57ec21f6479471d481fda5ff6b19008fc0426ce6c93f8ca2dcfc53457",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/16x9-duration-600-frame-599.png",
                "sha256": "04a501cc06bd05a226746bbe7cff771d447916564b42230a979bf3812b0cbb52",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 120,
            "averageChannelDifference": 2.4095052083333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-120-frame-14.png",
                "sha256": "f0a82c237720693fd6a7ea2dfd7d706040755683d05d53c1273fe6ff4d1d6952",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-120-frame-112.png",
                "sha256": "b434018ffe2a378fde460496e75235699df8a6929f5164aea2f612342ba9a214",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-120-frame-105.png",
                "sha256": "bfa302b4ee3a8004264cf71202dc652a429260f12b805a5daa2d90a14451f2b0",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-120-frame-119.png",
                "sha256": "215fc76ae8ea44f7530407f82d2bc01dda98cbdd926ad104e54c4d9ac4cb6aa9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.4271918402777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-600-frame-16.png",
                "sha256": "94d168dad7543c9902154894c6000e71297ae19714a5fdba0108f5dd5b8e0ccc",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-600-frame-112.png",
                "sha256": "b434018ffe2a378fde460496e75235699df8a6929f5164aea2f612342ba9a214",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-600-frame-528.png",
                "sha256": "9e0e97b7c9a088fb877f318444b4e69b1025fa60998c5d1a191fbcdb2d4c648a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/9x16-duration-600-frame-599.png",
                "sha256": "6b1f645a521712e2a52835c3082437f52c61040737aa41dc0ddbe33497eb1900",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 120,
            "averageChannelDifference": 2.5387369791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-120-frame-14.png",
                "sha256": "8e7d99dbf79dd47943d0d220bb763a068da032cce642ea309938c2e951f1169a",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-120-frame-112.png",
                "sha256": "2221b7301e648c4670204536fbae5463a355512277a832a8c90c77cd9b7c8281",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-120-frame-105.png",
                "sha256": "c6ebb0919a0924bc605e5f6a22526a4c4d849eab812358192cc7303bab638ae4",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-120-frame-119.png",
                "sha256": "f4febfc6ddefe7640d5bdbcea4bbfb0090e9568e10c02ecea6a316d116f22804",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.5555555555555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-600-frame-16.png",
                "sha256": "95f5f366fa94295107b01052cb3903858e4167760f9154064ce991ae88b313b4",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-600-frame-112.png",
                "sha256": "2221b7301e648c4670204536fbae5463a355512277a832a8c90c77cd9b7c8281",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-600-frame-528.png",
                "sha256": "236c868b8d153e6f24b07754ff485acdefc96a8cd8f84f766f1e0bc62b8a9fc4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/logo-cloud-burst/1x1-duration-600-frame-599.png",
                "sha256": "8f6c034c69e502afbfae25fdc380c59045ba1c2e76625aafb2ba2a8cfa0c0b82",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Integration marks burst around a sentence that names them talking to each other; marks in blue, green, orange and red, no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "eb54bc3087aa452ce14cfb8221f9420d692b9892f6dc636b9086d23e9bca78e7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/logo-cloud-burst/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-cloud-burst/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-cloud-burst/16x9/detail.mp4",
      "bg": "#f7f8fa",
      "posterFrame": 112,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e26b9f11aae49ae615d81ce3eb1d43ed383dc6c8573115ee8d7bce43ff56f6e9",
        "loop": "307e105cc4a1c56ef7383be90629177698e20a6fe829101092bcc36560ad00df",
        "detail": "8fff45169aa194d0d67ce8ca79d65e3814a079b32910c58a40dce9adfa01e58c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/logo-cloud-burst/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-cloud-burst/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-cloud-burst/9x16/detail.mp4",
      "bg": "#f7f8fa",
      "posterFrame": 112,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "d070aabfaef59fad24e5bc3ceea14f0c4565e8fa185cbdfdc7dd0fdec5e02fe8",
        "loop": "0cfa2f2eebb764b74470d3224fe091a4afe82efcda48cfa4199afa1def3470d8",
        "detail": "cbaccf1e88f01b4e9b858ab9ef5d1b69f16c62f54f2732d7063e6a73b6a33eb9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/logo-cloud-burst/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-cloud-burst/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-cloud-burst/1x1/detail.mp4",
      "bg": "#f7f8fa",
      "posterFrame": 112,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "d197d3f267174cdf6d3c0086e3cb1b1ba7392b7f85e74bfe341644421ec9a5d7",
        "loop": "75c0db570dadc539aef2f174a5f80efd22c6ad4c90f00f0937cbd51e303216cb",
        "detail": "f4f0f06c035886298d4560c4ff21a0f721b8e32864fa85572eebeebfc5caa218"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/eb54bc3087aa452ce14cfb8221f9420d692b9892f6dc636b9086d23e9bca78e7/index.mjs",
    "sha256": "eb54bc3087aa452ce14cfb8221f9420d692b9892f6dc636b9086d23e9bca78e7",
    "bytes": 164191,
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
    "at": "2026-10-09T03:19:52.297Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
