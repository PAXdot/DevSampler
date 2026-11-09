// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "word cycler",
    "rotating word",
    "use cases",
    "highlight",
    "sentence",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 82
    },
    "beats": [
      4,
      32,
      46,
      60,
      74
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
      "key": "prefix",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "words",
      "type": "list",
      "maxChars": 20,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "suffix",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "sentence",
      "prop": "y",
      "from": "below",
      "settledBy": 14,
      "easing": "ease"
    },
    {
      "target": "box",
      "prop": "width",
      "settledBy": 80,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V15 (word cycler in a highlight box); own copy"
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
    "prefix": "Do all your",
    "words": [
      "research",
      "outreach",
      "reporting",
      "hiring",
      "planning"
    ],
    "suffix": "in one place.",
    "color": "#F4F4F5",
    "accent": "#F4F4F5",
    "fontFamily": "Geist",
    "box": "solid",
    "swapEvery": 14
  },
  "fields": [
    {
      "key": "prefix",
      "label": "Prefix",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "words",
      "label": "Words",
      "type": "list",
      "max": 6,
      "role": "kicker"
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 32,
      "role": "subline"
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
        "solid",
        "tint"
      ]
    },
    {
      "key": "swapEvery",
      "label": "Swap every",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 40
    }
  ],
  "name": "Word Cycler",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "word-cycler",
    "bundleSha256": "4d570947c8c14ceaefcc4d1d0048fa9ce806ec82b0e05403737afe469387bb87",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:36.753Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-paper.png",
        "sha256": "32deba6c22b104f9e7b503acddd1b9c8f9abb2b3851c7f05834bbef2fc72d3d8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-night.png",
        "sha256": "fd964c645c035669d0ae56ae29cc3eea5426ca9e4c95ddfc12240afe6be15763"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-color.png",
        "sha256": "e157b61e60b7e7ff451c18fe86d34602401599bb18ebb1f4a53204a5388d5f00"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-paper.png",
        "sha256": "7e249db2a115e5cafb9b7fdbba097d746633b93e28abb20e1bb8d0e400c8dbdf"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-night.png",
        "sha256": "95c4077d3f583ec6c7f024f3d502c35ffc56d5aaa9dcdcad13155f26585c1f61"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-color.png",
        "sha256": "93e241b9aee0de6bded9d1a69e790de6b1cc41c2ee3070a3d587fd0f11bce794"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-paper.png",
        "sha256": "44f381adb133e8c9df24a5807a681712f2ff7877e48abc0c3ef3b483bfe04325"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-night.png",
        "sha256": "1ea1553aa1de7c3a7272c480c5421f9b07eafcdd03178f3c7660165eafcab4fb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-color.png",
        "sha256": "df28b33184bf5db7d0a091869225af23cb00a426da7d4665fe078eaac8bdd410"
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
          "word-cycler--16x9",
          "word-cycler--9x16",
          "word-cycler--1x1"
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
            "paperNight": 48.528971354166664,
            "paperColor": 30.22894965277778,
            "region": {
              "left": 97,
              "top": 454,
              "width": 1728,
              "height": 199
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 40.907877604166664,
            "paperColor": 45.010036892361114,
            "region": {
              "left": 108,
              "top": 243,
              "width": 864,
              "height": 1459
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.177978515625,
            "paperColor": 30.148790147569443,
            "region": {
              "left": 54,
              "top": 491,
              "width": 973,
              "height": 112
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
            "occupancy": 0.22944817233735063,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2350245653817083,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1864691430198623,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8586073318216177,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8538832199546487,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8355772864701438,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.12928125068042765,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.13241121780216433,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.10505802686872648,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.1161024305555554,
        "frames": [
          12,
          82,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 22.192274305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-45-frame-5.png",
                "sha256": "23538b3e2dcfbacb2acd57844910ec220ec7a3703d60fbbee09e3184f24c3e17",
                "alphaMass": 3981
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-45-frame-44.png",
                "sha256": "75cbb44f086ef6ef46a4bc0aba5b77f1f116e4eda825b426264feb5250fb274f",
                "alphaMass": 31757
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-45-frame-39.png",
                "sha256": "75cbb44f086ef6ef46a4bc0aba5b77f1f116e4eda825b426264feb5250fb274f",
                "alphaMass": 31757
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.1161024305555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-600-frame-12.png",
                "sha256": "c870c7494c7871dfb0533f0e604d553e9183d1133e01370cf5ff976a7b2fa952",
                "alphaMass": 31320
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-600-frame-82.png",
                "sha256": "1f5646c34dcc244ba30cfbf157e7471ebf19874156b1266b02cb8db0fecba585",
                "alphaMass": 31069
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-600-frame-528.png",
                "sha256": "1f5646c34dcc244ba30cfbf157e7471ebf19874156b1266b02cb8db0fecba585",
                "alphaMass": 31069
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/16x9-duration-600-frame-599.png",
                "sha256": "1f5646c34dcc244ba30cfbf157e7471ebf19874156b1266b02cb8db0fecba585",
                "alphaMass": 31069
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 51.560329861111114,
            "retainedAlpha": 0.9999908653275237,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-45-frame-5.png",
                "sha256": "45d3ab4dd4141dab91191fe2327ba4047b580ca2733d76f2703ef8f511bbddd0",
                "alphaMass": 13642
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-45-frame-44.png",
                "sha256": "52d42e6998fbd917892daf3a83dad7aaa1faf3f9412c7cc10045f3bee50082b8",
                "alphaMass": 109473
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-45-frame-39.png",
                "sha256": "be5659dbfb539f9ef266538151e182a51c8572cc1987a97b4e300f7b0b7fb41e",
                "alphaMass": 109472
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.7513020833333335,
            "retainedAlpha": 1.000009326879133,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-600-frame-12.png",
                "sha256": "6230ab9621a929e6425eeaa23dac51a0d324133e3e730c77f1b11bb7c9a84afa",
                "alphaMass": 107841
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-600-frame-82.png",
                "sha256": "7dae7632c564f372a0c5d5763230b46a52345445b9e460e405d1571fa2815128",
                "alphaMass": 107217
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-600-frame-528.png",
                "sha256": "ed3627f0e1958c3b27a7b7b1c581620391479fe7dab9044db3351c475e4cbb3e",
                "alphaMass": 107217
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/9x16-duration-600-frame-599.png",
                "sha256": "214778a83e0e762e76f00e8b4fdd500e551aedb36ca8c20bd51ae7142c652b08",
                "alphaMass": 107218
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 13.660047743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-45-frame-5.png",
                "sha256": "75636e256735e00adb464b60aba86db75d5712c27770f81fc4ea39e2d203bc31",
                "alphaMass": 2315
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-45-frame-44.png",
                "sha256": "7eefac9649d83f1be5c860c6c07709631718749dbd8e433753783a0213a7cad3",
                "alphaMass": 18941
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-45-frame-39.png",
                "sha256": "7eefac9649d83f1be5c860c6c07709631718749dbd8e433753783a0213a7cad3",
                "alphaMass": 18941
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 1.6410590277777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-600-frame-12.png",
                "sha256": "0f178909e9ebba86e9fd5f00e6a2000bfa5b467f2f6333a29d527fcae6c2f46b",
                "alphaMass": 18687
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-600-frame-82.png",
                "sha256": "02aae305dd03ee19ba09612d6fd5028be00daf0c68d1db24360d83fb4e25aa7f",
                "alphaMass": 18514
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-600-frame-528.png",
                "sha256": "02aae305dd03ee19ba09612d6fd5028be00daf0c68d1db24360d83fb4e25aa7f",
                "alphaMass": 18514
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-cycler/1x1-duration-600-frame-599.png",
                "sha256": "02aae305dd03ee19ba09612d6fd5028be00daf0c68d1db24360d83fb4e25aa7f",
                "alphaMass": 18514
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
        "note": "A sentence with one word cycling in a chip; title card."
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
      "bundleSha256": "4d570947c8c14ceaefcc4d1d0048fa9ce806ec82b0e05403737afe469387bb87",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.928176Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/word-cycler/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-cycler/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-cycler/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "47c104b3636ba2eb3b4cd9840ca4a95c269962eb369207d96d5746a8bb2aaf31",
        "loop": "2db36d14d6d6455fbe11515d699285f2b2d7882d657a0c5304d0f6ae2453b485",
        "detail": "01e755f493f9e3e851732fd66a2960dc390ef1a4a75efc88684cc4774aeeca65"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/word-cycler/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-cycler/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-cycler/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "7b0b1b9da59f8b4b90a6ef85042190aa2354f7686c3514f5e196868159fae7c8",
        "loop": "233271cb5190450b765e4bf499dd979ac90a93e56bbf9fff3d9747cefca4b5de",
        "detail": "83fcfaf9a6a04aaece24153ce2c4f0e04a07ecdc9b4691d1594400677c54702e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/word-cycler/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-cycler/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-cycler/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "e93d3c32b75750f65ee0d1ffa50d1d3dc1afdc4cae5674aff70121b4b6a08f63",
        "loop": "0ccc38b6927779919078018da694886db6b0db29344e1b2b659acde0d66539b3",
        "detail": "6c91dc3977b3bfa6cc63c6fa7b2e2ddb7f2da6e22f0c837a6a13d3fee988e84a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4d570947c8c14ceaefcc4d1d0048fa9ce806ec82b0e05403737afe469387bb87/index.mjs",
    "sha256": "4d570947c8c14ceaefcc4d1d0048fa9ce806ec82b0e05403737afe469387bb87",
    "bytes": 161010,
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
    "at": "2026-10-07T02:21:09.303Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
