// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "media/photo",
  "tags": [
    "photo",
    "stack",
    "cards",
    "gallery",
    "polaroid",
    "collection"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 36,
      "out": 0
    },
    "markers": {
      "settled": 44
    },
    "beats": [
      0,
      8,
      16,
      24
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "16:9",
      "9:16"
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
      "key": "photo1",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo2",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo3",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo4",
      "type": "image",
      "role": "media"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "paperColor": "colors.background",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cards",
      "prop": "y",
      "from": "above",
      "settledBy": 36,
      "easing": "ease"
    },
    {
      "target": "cards",
      "prop": "x",
      "from": "0",
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
    "sourceUrl": "21st first-party"
  },
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "photo1": "",
    "photo2": "",
    "photo3": "",
    "photo4": "",
    "count": 4,
    "spread": 8,
    "caption": "Field notes, spring trip",
    "border": true,
    "paperColor": "#FBFBF9",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "photo1",
      "label": "Photo 1",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo2",
      "label": "Photo 2",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo3",
      "label": "Photo 3",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo4",
      "label": "Photo 4",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 6
    },
    {
      "key": "spread",
      "label": "Spread",
      "type": "number",
      "min": 0,
      "max": 18
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "border",
      "label": "Border",
      "type": "boolean"
    },
    {
      "key": "paperColor",
      "label": "Paper color",
      "type": "color",
      "brand": "colors.background"
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
  "name": "Photo Stack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "photo-stack",
    "bundleSha256": "dfb0a9988514d97166e455c6e779e1bdf761cb077fed1fbea7cd21ba0b1d4fee",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:20.792Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-paper.png",
        "sha256": "fc3c63eb8a7999c85afcf1ca5f84a72d826d1cc9560e7896cb1fed459dc2eafe"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-night.png",
        "sha256": "6d96cdc268ddcb0c51ad74f0851ce4a6ca37287b38ecd2ce8ca889ae0ed13b89"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-color.png",
        "sha256": "d071ab29936c8646737c1a1f99d081538f2e064cccbd68b7e1ce6f2481ee9917"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-paper.png",
        "sha256": "0cb6d19403160904a29d0fc22f935cd2c13da44ed55c7d1c04515d988fe4c10e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-night.png",
        "sha256": "403eeacd21aaa9c554fd02bc9e7ddcfa9c12913d6d630dbe1d341f4ca3ebbcd4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-color.png",
        "sha256": "b13bd2996c74d62b0a39470c70eb7a90c35e44d1f2cf769f6b9f89715d5b403c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-paper.png",
        "sha256": "aa4f510e0312217fdeec3411bd9d20f05103602451ddc50ffd351572017169aa"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-night.png",
        "sha256": "3f3e477c24498d15aa7334e2bebfa22375b21d05d2bda935a4a828d88f0675b9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-color.png",
        "sha256": "3ab37f09c796155aa738c8dd89e002bc2c2a0376bda1523cc6db30c751648ecc"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "photo-stack--1x1",
          "photo-stack--16x9",
          "photo-stack--9x16"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 35.69395616319444,
            "paperColor": 6.996907552083333,
            "region": {
              "left": 318,
              "top": 250,
              "width": 429,
              "height": 598
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 35.703206380208336,
            "paperColor": 6.987684461805555,
            "region": {
              "left": 738,
              "top": 250,
              "width": 429,
              "height": 598
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.681884765625,
            "paperColor": 9.626220703125,
            "region": {
              "left": 169,
              "top": 500,
              "width": 742,
              "height": 983
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6493983124228201,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6493983124228201,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6493983124228201,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36528655073783634,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36528655073783634,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36528655073783634,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0077695237045436,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0385624813732937,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8580037750428963,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.758463541666666,
        "frames": [
          6,
          44,
          119
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 17.347005208333332,
            "retainedAlpha": 0.9934105932557945,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-45-frame-5.png",
                "sha256": "7abdb7af5db9c7e8d94977d382814671f747cff946b5b6a892ba4d8e7c75bc0d",
                "alphaMass": 88398
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-45-frame-44.png",
                "sha256": "20357421c5d082d9915137f2ed8b084077f358eddc33f21d6b6739a3e9e368cf",
                "alphaMass": 95608
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-45-frame-39.png",
                "sha256": "8cdee4be28698b7df781d7b7afde8641de988fdcfdde4e316d1a0b8134972e52",
                "alphaMass": 94978
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.27615017361111,
            "retainedAlpha": 1.0020527644243358,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-900-frame-6.png",
                "sha256": "80f9a91fa36df0568669e274f683a9d702f11ac55904344a0fe1627fb2787379",
                "alphaMass": 87723
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-900-frame-44.png",
                "sha256": "20357421c5d082d9915137f2ed8b084077f358eddc33f21d6b6739a3e9e368cf",
                "alphaMass": 95608
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-900-frame-792.png",
                "sha256": "6a3e28b0afec8b59fa363dcc3108a3fe7503ff49420a4fc1e718c66d82fae40c",
                "alphaMass": 95481
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/1x1-duration-900-frame-899.png",
                "sha256": "84d1c20f60c561f039e5377a78ab0491792a37164f6d37b8c1cb8c43e3ee74c2",
                "alphaMass": 95677
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 9.845377604166666,
            "retainedAlpha": 0.9933878157503715,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-45-frame-5.png",
                "sha256": "d8542ab0465afe8cec267ece707e2a3d2fcca918d7299ac44d38606b83ecb58f",
                "alphaMass": 49745
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-45-frame-44.png",
                "sha256": "dbb6bf75aad3e89a4dacd1b2e6b858f5454f3ef4e0c04ee84f44e2b101b0a828",
                "alphaMass": 53840
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-45-frame-39.png",
                "sha256": "e56a4c2e836407f6bba96f1c0b911883009ecc074e3d2bef4c0274cb17b2b2c0",
                "alphaMass": 53484
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.758463541666666,
            "retainedAlpha": 1.0019717261904761,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-900-frame-6.png",
                "sha256": "40b17984241c65df3889fb92292b9b23fab4d3aca6b53958418f347f981d09f1",
                "alphaMass": 49331
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-900-frame-44.png",
                "sha256": "dbb6bf75aad3e89a4dacd1b2e6b858f5454f3ef4e0c04ee84f44e2b101b0a828",
                "alphaMass": 53840
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-900-frame-792.png",
                "sha256": "b0ee390bb67b0b98c59e48f85379672bb4b36b5d5be4c3e3740c3e4d62609541",
                "alphaMass": 53760
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/16x9-duration-900-frame-899.png",
                "sha256": "7b0b2f95df2ca5dafad66cadfd2c976050f0fe284c80a4e1c7b4bb5496a46fc0",
                "alphaMass": 53866
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 28.637586805555557,
            "retainedAlpha": 0.9820474844037521,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-45-frame-5.png",
                "sha256": "d0b6624d9f5bd1a6d6af5841173749d47ff43b8460475e13b0dbafee8ee95058",
                "alphaMass": 100211
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-45-frame-44.png",
                "sha256": "37ada9f23d5a09b64187c4a9919c278699ade1f7b6c55d834b22257b41128684",
                "alphaMass": 111405
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-45-frame-39.png",
                "sha256": "9c71432ef0e9fb694e77989eac406725be4b0dbd18baef9af77eb1e4d073f0e9",
                "alphaMass": 109405
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.937391493055557,
            "retainedAlpha": 1.0014287254690533,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-900-frame-6.png",
                "sha256": "a0853b1f55fbfe6420b0397eab448f1d19dd4b46875ebfe7b96f5e30bd194120",
                "alphaMass": 99059
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-900-frame-44.png",
                "sha256": "37ada9f23d5a09b64187c4a9919c278699ade1f7b6c55d834b22257b41128684",
                "alphaMass": 111405
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-900-frame-792.png",
                "sha256": "e7d872d59628b3bc04fa57ddfe8bac73bed15c844c5d7997b6c643a152dbdab1",
                "alphaMass": 111288
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-stack/9x16-duration-900-frame-899.png",
                "sha256": "864eae89dd2837a670db552404aaaf3d7792f45b3373e96b80c276bf09ad6f3e",
                "alphaMass": 111447
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
        "note": "Polaroid-style photos stack one on another with a caption."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 7,
        "compared": 7,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "dfb0a9988514d97166e455c6e779e1bdf761cb077fed1fbea7cd21ba0b1d4fee",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.014036Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/photo-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-stack/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 44,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "6a34534d7acab04d6d66dd04c6c6a3e3d0caa5ad5c3929005d93128dcf1df323",
        "loop": "6036838444ceb6998cb738a41c42432f6c8859cfaaf837ed18e76e0bad8bb818",
        "detail": "c7a24ebccf7767fe30495854dfc5bfd472a0b26815732a6a9418dd7ab9681fe1"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/photo-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-stack/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 44,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "97433572bb645ab98391d2f7badc178795ac55e842f52b7ed69baba109c7e56f",
        "loop": "d8834fcbc2a82b31c706c0ef4fbde145d687be4424035689756fe4fd7b593fcf",
        "detail": "d5b7c21710fd584bee122b64b38029ff41cfbf9c9c84352239f0122131dc50a5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/photo-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-stack/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 44,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "05467d7abd5eda51701b9e8c3b2d2240470c16885b0f4fe33b786e05db3cd342",
        "loop": "a81a38f3190c6c63601a69da3eda2e9a9c06be5dce8a4b21e5e14ec001a438e7",
        "detail": "c4ed9bd6222a8cf4649fc0ca0325d4fd5afd547ec72583e7042efc0e533cf413"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/dfb0a9988514d97166e455c6e779e1bdf761cb077fed1fbea7cd21ba0b1d4fee/index.mjs",
    "sha256": "dfb0a9988514d97166e455c6e779e1bdf761cb077fed1fbea7cd21ba0b1d4fee",
    "bytes": 791721,
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
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:41:48.669Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
