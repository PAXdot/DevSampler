// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "mask"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "title",
    "headline",
    "word",
    "type mask",
    "knockout type",
    "letters as windows",
    "wipe",
    "transition",
    "zoom through",
    "screenshot",
    "kinetic type",
    "poster"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 72,
      "min": 64,
      "max": 240
    },
    "stretch": "hold",
    "phases": {
      "in": 63,
      "out": 0
    },
    "markers": {
      "settled": 63,
      "scroll": 3,
      "word": 26,
      "dive": 36,
      "covered": 55
    },
    "beats": [
      0,
      3,
      9,
      26,
      36,
      40,
      55,
      63
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "text",
      "type": "text",
      "maxChars": 24,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.display"
  },
  "motionBeats": [
    {
      "target": "text",
      "prop": "translateX",
      "from": "right",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "camera",
      "prop": "scale",
      "from": "outside",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "scale",
      "settledBy": 55,
      "easing": "ease"
    },
    {
      "target": "screenshot",
      "prop": "scale",
      "settledBy": 63,
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
      "marker": "word"
    },
    "hover": [
      0,
      72
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (a giant word scrolls in with the next scene inside its letters, then its last letter swallows the frame, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "screenshot": "",
    "color": "#EDF6EE",
    "primary": "#F4D35E",
    "secondary": "#EE964B",
    "background": "#192A22",
    "fontFamily": "Bricolage Grotesque",
    "fit": "auto",
    "grain": true
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "brand": "fonts.display"
    },
    {
      "key": "fit",
      "label": "Fit",
      "type": "select",
      "options": [
        "auto",
        "full",
        "window"
      ]
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Word Curtain Wipe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "word-curtain-wipe",
    "bundleSha256": "af38a67320a6adaa579c3b3215753ae23cf950b96bf7bfdd83b627d9a0f6f7d5",
    "sourceSnapshot": {
      "sha256": "d4fd8144ed7e82f63ba629891879aa3536f81ef3b8867d282374e43780e6f9c9",
      "files": 1884
    },
    "renderedAt": "2026-10-09T15:37:42.662Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-paper.png",
        "sha256": "0c2c4498ce6b864062804cfbf1cb9e78974812f2c334f18327ea467e23a8c83e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-night.png",
        "sha256": "cc959a2fc10b519d68abeefa89cf8c165aef03f7356840fa54028c67c44e0076"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-color.png",
        "sha256": "93e78298a67d73bd641e8aacacb65c624fd8a3aeb78eef4734b1abf186130f27"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-paper.png",
        "sha256": "407d4479f3d11e4172d4f468d5d634da1b8dc28f3494f6a9d52c00f544c95928"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-night.png",
        "sha256": "cf5659de5869aeb94dd36e9e50e5d13ca07381c46fec235dd3737b893c230d76"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-color.png",
        "sha256": "9c00c649632216ed5cc85f7cbdb2a430bc5d1ac2af1a4802f5a518e9fa275594"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-paper.png",
        "sha256": "656c0adbcc8e75e1943ad06a5ff0a32da473f6a4a7e0dbf3193cb72b266dc693"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-night.png",
        "sha256": "08a453f93e69ccc50a0cebc749ae8a8fa5fbc7b89f36f1893c776015536dcf13"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-color.png",
        "sha256": "38eb2754b6a9367c8b864c09314edd8dbce4ce9d7c3d6d41eb5e2e6223363844"
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
          "word-curtain-wipe--16x9",
          "word-curtain-wipe--9x16",
          "word-curtain-wipe--1x1"
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
            "paperNight": 36.21063910590278,
            "paperColor": 101.04299587673611,
            "region": {
              "left": 90,
              "top": 347,
              "width": 1753,
              "height": 401
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.426866319444443,
            "paperColor": 68.78740776909723,
            "region": {
              "left": 40,
              "top": 359,
              "width": 1008,
              "height": 1198
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 27.31228298611111,
            "paperColor": 72.04844835069444,
            "region": {
              "left": 75,
              "top": 191,
              "width": 938,
              "height": 707
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
            "occupancy": 0.4190516870328379,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.41981853505291017,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4782513973310519,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7213394858329135,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7344025573192241,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8040531348856417,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6479360005319001,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6701531778692273,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.736197185206959,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 44.283203125,
        "frames": [
          3,
          26,
          71
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 64,
            "averageChannelDifference": 44.283203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-64-frame-3.png",
                "sha256": "3a0cd2c602c2cba0c20d9a0a8cad87ff89da96c3a9f0640fca68d65f44c25371",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-64-frame-26.png",
                "sha256": "be45fad5ccef08a668c0de4f41dcc59714f9780e2c71d36318dd2e18fea588cf",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-64-frame-56.png",
                "sha256": "e118fc81f43dd7ae883b63e428bd7f7342e2157c916bebc1b2e33a9798e56406",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-64-frame-63.png",
                "sha256": "a78b445c02c69ee03a2ab6b7c1497192e73528b8626d5058344a5b72deb3403a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 240,
            "averageChannelDifference": 44.283203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-240-frame-3.png",
                "sha256": "9896dae78b9cb37a2279362c8dcd39beed9be54ededd5c4f5405019b98b80d05",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-240-frame-26.png",
                "sha256": "be45fad5ccef08a668c0de4f41dcc59714f9780e2c71d36318dd2e18fea588cf",
                "alphaMass": 587520
              },
              {
                "frame": 211,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-240-frame-211.png",
                "sha256": "a78b445c02c69ee03a2ab6b7c1497192e73528b8626d5058344a5b72deb3403a",
                "alphaMass": 587520
              },
              {
                "frame": 239,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/16x9-duration-240-frame-239.png",
                "sha256": "a78b445c02c69ee03a2ab6b7c1497192e73528b8626d5058344a5b72deb3403a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 64,
            "averageChannelDifference": 23.2939453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-64-frame-3.png",
                "sha256": "527644ba10da21956094254a666b3ae7c9227152dc71b9beaf34c9414ea1acf7",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-64-frame-26.png",
                "sha256": "64b00f4739d238aa90b94d160afec3716fea630fce2500e527f2de362ff586e2",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-64-frame-56.png",
                "sha256": "90f05a7dfe73eab3a533df08235b472ae343eb13dbb99f1facf998447c1e067f",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-64-frame-63.png",
                "sha256": "9f44dc9b239752f85e2d5c17b9e9c00d3be001308ace8c08404a62ec2f07bca8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 240,
            "averageChannelDifference": 23.2939453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-240-frame-3.png",
                "sha256": "0a62d477262655036cc548327d9ed376d4a997a3a228605814adf9dc830a022c",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-240-frame-26.png",
                "sha256": "64b00f4739d238aa90b94d160afec3716fea630fce2500e527f2de362ff586e2",
                "alphaMass": 587520
              },
              {
                "frame": 211,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-240-frame-211.png",
                "sha256": "9f44dc9b239752f85e2d5c17b9e9c00d3be001308ace8c08404a62ec2f07bca8",
                "alphaMass": 587520
              },
              {
                "frame": 239,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/9x16-duration-240-frame-239.png",
                "sha256": "9f44dc9b239752f85e2d5c17b9e9c00d3be001308ace8c08404a62ec2f07bca8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 64,
            "averageChannelDifference": 38.11187065972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-64-frame-3.png",
                "sha256": "6b9403e00f9faf19d178abd2094ed63ea24d24bc152276505fd62a6af6c82d26",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-64-frame-26.png",
                "sha256": "4829ddd2ea4734e5d941afe9c3ba0c3fd2f3888aa83cf505264b0d64dd82023d",
                "alphaMass": 587520
              },
              {
                "frame": 56,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-64-frame-56.png",
                "sha256": "49c9291012fba0e8ecfa1edaea1e763cba1a8768f0e0203b37d79b166b606ac1",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-64-frame-63.png",
                "sha256": "0cd38f3a27ea9b9a861f605c51c1825e4b0eb116a80ad69eb25c5d5ac5f69196",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 240,
            "averageChannelDifference": 38.11187065972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-240-frame-3.png",
                "sha256": "6b9403e00f9faf19d178abd2094ed63ea24d24bc152276505fd62a6af6c82d26",
                "alphaMass": 587520
              },
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-240-frame-26.png",
                "sha256": "4829ddd2ea4734e5d941afe9c3ba0c3fd2f3888aa83cf505264b0d64dd82023d",
                "alphaMass": 587520
              },
              {
                "frame": 211,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-240-frame-211.png",
                "sha256": "0cd38f3a27ea9b9a861f605c51c1825e4b0eb116a80ad69eb25c5d5ac5f69196",
                "alphaMass": 587520
              },
              {
                "frame": 239,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-173248/word-curtain-wipe/1x1-duration-240-frame-239.png",
                "sha256": "0cd38f3a27ea9b9a861f605c51c1825e4b0eb116a80ad69eb25c5d5ac5f69196",
                "alphaMass": 587520
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
        "note": "TitleMatches: The presented motion sequence (images 1-3) demonstrates a wipe effect using text as a mask, revealing (and then finishing with) underlying UI content horizontally from the bottom of the word, consistent with a 'Curtain Wipe' effect applied to oversized typographic elements as described. The portion of UI visible directly matches the structure shown in the fourth image, verifying that the type is acting as a mask for a graphic below. No other unrelated motion is present—just the sliding reveal, supporting the curtain wipe concept.\n\nNoBakedHeading: There is no decorative, static block-title, category, or language label visibly baked into the compositions. All visible text, 'Ship faster', matches named-slot content and serves a clear, content role as the compositional focal point. No external, unexplained title overlays are present.\n\nBrandAdherence: Images 5-7 show the core poster design in three distinctly different palettes that correspond to the provided palette swatches (green/brown on light, purple/gray on dark, two-tone olive on pale green). The color of the outlines, fill, and background shifts appropriately across each, and the masked material remains clearly legible under each treatment. The shape and hierarchy of material are preserved. All three are rendered with no fixed, unexplained block colors present.\n\nLanguageAdherence: The visible material—oversized sans-serif type, the typographic mask, movement in the type revealing flat UI shapes, and the flat color fields—adheres to the language card. Type, numerals, and accent shapes remain consistent across branding contexts and the sampled motion frames. No prohibited treatments (frosted glass, browser chrome, ambient cards) appear. The role of type and background is consistent with the described brand roles. The motion aligns to the specified 'slide' verb with clear input/output states. Thus, both motion and material conventions are followed."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 54,
        "compared": 54,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "af38a67320a6adaa579c3b3215753ae23cf950b96bf7bfdd83b627d9a0f6f7d5",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T15:38:01.666Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/word-curtain-wipe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-curtain-wipe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-curtain-wipe/16x9/detail.mp4",
      "bg": "#182921",
      "posterFrame": 26,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 72,
      "sha256": {
        "poster": "1924d178cb833bc92526af550a5cc2486d2c38295d18a60dcf7c5455aab4500b",
        "loop": "71e57e91abc3998d604196686bc3377749ae9a90414c6ee96bd87e159ca4415e",
        "detail": "ed61e3653847664f889243d76374a5f1fabad8fa1b6a568830d38e2b08038f00"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/word-curtain-wipe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-curtain-wipe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-curtain-wipe/9x16/detail.mp4",
      "bg": "#182921",
      "posterFrame": 26,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 72,
      "sha256": {
        "poster": "5acc512d50c932cec53d353d0fd28ea5d1f5fab2343b0fae9fc89f2dbd1a8006",
        "loop": "7acb776c93e06f37af4a1e85e33c5ac8ee7a5b507f2418b81c0cda4ec52a0c8e",
        "detail": "87194ab2af99e769861f6e95cdc583100bce1e4afa86a69a639d48bc755ed3f3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/word-curtain-wipe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-curtain-wipe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-curtain-wipe/1x1/detail.mp4",
      "bg": "#182921",
      "posterFrame": 26,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 72,
      "sha256": {
        "poster": "b16a933cc38dfe297316e43f24b0586e8ceaf5a2ade42bf77b8e8d1a902aa128",
        "loop": "3e4222ba206bcc9c7e93ba6fe6774af9f493cc975e6e5e165a1c49e8cb9f53e9",
        "detail": "7b651526472d82bbfbc6331ac712264fc5166af91c19a8711b1f54d61005a7e5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/af38a67320a6adaa579c3b3215753ae23cf950b96bf7bfdd83b627d9a0f6f7d5/index.mjs",
    "sha256": "af38a67320a6adaa579c3b3215753ae23cf950b96bf7bfdd83b627d9a0f6f7d5",
    "bytes": 173827,
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
    "at": "2026-10-09T15:41:37.137Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
