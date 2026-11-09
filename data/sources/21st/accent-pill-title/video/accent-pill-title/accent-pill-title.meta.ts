// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/title",
  "tags": [
    "chapter",
    "title",
    "pill",
    "highlight",
    "typing",
    "feature",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 36,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 30,
      "out": 0
    },
    "markers": {
      "settled": 32
    },
    "beats": [
      3,
      18,
      30
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.04,
      "y": 0.06,
      "w": 0.92,
      "h": 0.88
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "title",
      "prop": "chars",
      "settledBy": 28,
      "easing": "linear"
    },
    {
      "target": "pill",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 30,
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
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V04 (chapter titles with accent box); own copy"
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
    "title": "every edit, now versioned",
    "accentWord": "versioned",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "box": "tint",
    "lowercase": true,
    "framesPerChar": 1
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "accentWord",
      "label": "Accent word",
      "type": "text",
      "max": 24
    },
    {
      "key": "color",
      "label": "Color",
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "box",
      "label": "Box",
      "type": "select",
      "options": [
        "tint",
        "solid",
        "outline"
      ]
    },
    {
      "key": "lowercase",
      "label": "Lowercase",
      "type": "boolean"
    },
    {
      "key": "framesPerChar",
      "label": "Frames per char",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 3
    }
  ],
  "name": "Accent Pill Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "accent-pill-title",
    "bundleSha256": "a435bb1f2967317b7575ff7d17a0bb7923ca46726f0b6ced397e7887b6be6a06",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:06.084Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-paper.png",
        "sha256": "f00f735e0cd9021993396b7c217d10feca0b11c04a636ab871f744cd5d9c8a45"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-night.png",
        "sha256": "3c93b0583d6a2897e2b939f509255f8a6064045e61f140292a80165168b47811"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-color.png",
        "sha256": "aca7c9f21db15dc34f1d083fb006a260826dc6f8321543ebdd403d271b8b9204"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-paper.png",
        "sha256": "744006d58f79dee43b798a58ec871a534015ec172e4164adcec750d8ac9c4872"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-night.png",
        "sha256": "691af8db85950972a0f81ce451a66ebdf91147c9d52ce4fcbca7e1dce0902aac"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-color.png",
        "sha256": "72d984b50e09c673e6462bb2dbc23c728fcaac6eee225f95ce73ba8bab74cef3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-paper.png",
        "sha256": "a4009b370c89c4f72137697b2e472774c530d9651f7b2a93421d0f37e3d7be1e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-night.png",
        "sha256": "de6ad5ac27a82eda500da754367c5afb8cc8ed7b04bd2f68289607817941fa07"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-color.png",
        "sha256": "88223a8c98672b2e2da209ae03a150821082f30646ef331b3d665739bfe63cb9"
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
          "accent-pill-title--16x9",
          "accent-pill-title--9x16",
          "accent-pill-title--1x1"
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
            "paperNight": 58.97309027777778,
            "paperColor": 63.237277560763886,
            "region": {
              "left": 292,
              "top": 372,
              "width": 1355,
              "height": 367
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.183837890625,
            "paperColor": 21.34646267361111,
            "region": {
              "left": 90,
              "top": 265,
              "width": 900,
              "height": 1421
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 60.402126736111114,
            "paperColor": 63.340494791666664,
            "region": {
              "left": 164,
              "top": 444,
              "width": 763,
              "height": 208
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
            "occupancy": 0.27716908361852977,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2815576140435599,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.16947546283173767,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8331687548990792,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8464033761652812,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6196282364540467,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15694549424708157,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15966355963967666,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.09548951324928692,
            "bad": [],
            "measured": 22
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 29.35883246527778,
        "frames": [
          4,
          32,
          74
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 36,
            "averageChannelDifference": 29.35883246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-36-frame-4.png",
                "sha256": "dae1fefff0d0f1a3ad4a7609e5dcfa9d0f7d170d5fac3a774746bcefd6e872a8",
                "alphaMass": 2231
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-36-frame-32.png",
                "sha256": "1e6986140f7ca82be9075207ace3576d5f49ff5df2f63e2c43add0e569da5f7f",
                "alphaMass": 29402
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-36-frame-31.png",
                "sha256": "954b98176b8825dff15a7c013e32518779085dedc29d614648bc06212a636673",
                "alphaMass": 29402
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-36-frame-35.png",
                "sha256": "813428d1175852c48191ec87387d9724d7c31c61aed27e989df85c5dc1d1bbab",
                "alphaMass": 29402
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 29.35883246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-600-frame-4.png",
                "sha256": "2198605b5ca0c2d03145cb5a3dc4eb488a922f6dffdc1278d155f25db8748911",
                "alphaMass": 2231
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-600-frame-32.png",
                "sha256": "6ea606a21ef8b22e9b80c30b80e42e8798923cf1aa01354be6f0697c966d3888",
                "alphaMass": 29402
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-600-frame-528.png",
                "sha256": "541b939e93ac51b32aaa85e5c15ff4d9e3fe68485001dad18899718046c16e64",
                "alphaMass": 29402
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/16x9-duration-600-frame-599.png",
                "sha256": "1f83af7477efb47a9f37eca41c15ddac3bfec72f501346b440c4ad38bfd9a79a",
                "alphaMass": 29402
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 36,
            "averageChannelDifference": 48.31976996527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-36-frame-4.png",
                "sha256": "8d9873741bf3f06e07d3004d930c1bb49ea451c1ede8d37d74c59f69b21c8e33",
                "alphaMass": 2878
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-36-frame-32.png",
                "sha256": "646afe69774f0fa4b7ffa9bfa672f07dd500097f1479a7be0d961adce8d17ff4",
                "alphaMass": 38564
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-36-frame-31.png",
                "sha256": "c1570c545ee989329ac592b5203c73323cd24334b06740409085a77b6c8ae80c",
                "alphaMass": 38564
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-36-frame-35.png",
                "sha256": "45610d2107511931a63275afd913571b89c69d1250ca6ef260fc8985614152ad",
                "alphaMass": 38564
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 48.3193359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-600-frame-4.png",
                "sha256": "7a794cf81e5c05440129f0b08cdf7259199becd7cf943e8144dd9c8970f70aa3",
                "alphaMass": 2878
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-600-frame-32.png",
                "sha256": "76767fcc5dfc8019b645d1b5f3e45c0d622df8bf480a2ced411b8aaff6bcca91",
                "alphaMass": 38564
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-600-frame-528.png",
                "sha256": "4684138f836f6e70f93a75ce2cd99aeffcb360f5427dea9bc2cd15073eef3b63",
                "alphaMass": 38564
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/9x16-duration-600-frame-599.png",
                "sha256": "11347fe7a94e7e0e70f4a6addbb51ad62738c0cee7f695b17580fd981e488a7b",
                "alphaMass": 38564
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 36,
            "averageChannelDifference": 20.398546006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-36-frame-4.png",
                "sha256": "dfe7f2e13f86a50879da10403db2625ca28580efd096304cef2f043d84b0b01e",
                "alphaMass": 1369
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-36-frame-32.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-36-frame-31.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-36-frame-35.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 20.398546006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-600-frame-4.png",
                "sha256": "dfe7f2e13f86a50879da10403db2625ca28580efd096304cef2f043d84b0b01e",
                "alphaMass": 1369
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-600-frame-32.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-600-frame-528.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/accent-pill-title/1x1-duration-600-frame-599.png",
                "sha256": "ed214ee3bdbf01828d658e6dba3c11e0453ac8fef508b0940785c899389fd6db",
                "alphaMass": 17353
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
        "note": "Phrase types in and the last word lands in an accent pill; title card."
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
      "bundleSha256": "a435bb1f2967317b7575ff7d17a0bb7923ca46726f0b6ced397e7887b6be6a06",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.995331Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/accent-pill-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accent-pill-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accent-pill-title/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 32,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "38a20a59f095d22cfcc1382133b6b171d9b08e0286dab1705ced20fae502b52d",
        "loop": "444270b5dd226e6db59f7f2ed93460e4b7ebc234354ada318bbbac24efc5fb16",
        "detail": "2ec3eb6b2273cdbdb066c66bc40f19f2f93c1f2ecbf2cd020465c02dcc819ecd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/accent-pill-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accent-pill-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accent-pill-title/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 32,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "200f2d9bf5c8275d1a0a6930ce0fc507014014311cb017d5ef63813a41deca5a",
        "loop": "f98eeaffc69d5bbf87eef04fa24cd8552a5aaa44ee94534c4832df96e20dc325",
        "detail": "c5b5c21419ea788db2490337b32a7b9a3c51ae5f311b844ea1158d0049943b24"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/accent-pill-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accent-pill-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accent-pill-title/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 32,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "9fed7e07af83d31a7798268bb12b971b793fb04c18942227ead5e6a21042a34b",
        "loop": "57e5aa26041398e6f78bd2def96401900da4808880e18f147dda92f03a6e7a52",
        "detail": "cad0fd9533995b199857742b06a0c682a4c922576e8a439ba473e5ea3f9b0961"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a435bb1f2967317b7575ff7d17a0bb7923ca46726f0b6ced397e7887b6be6a06/index.mjs",
    "sha256": "a435bb1f2967317b7575ff7d17a0bb7923ca46726f0b6ced397e7887b6be6a06",
    "bytes": 160617,
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
    "at": "2026-10-07T02:29:20.887Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
