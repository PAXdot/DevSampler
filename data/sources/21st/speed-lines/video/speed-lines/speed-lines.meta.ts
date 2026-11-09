// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "background/lines",
  "tags": [
    "background",
    "speed lines",
    "streaks",
    "diagonal",
    "dark",
    "hype",
    "ambient",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 60,
      "max": 1800
    },
    "stretch": "loop",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      80,
      160
    ],
    "loop": true
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [],
  "brand": {
    "accent": "colors.primary",
    "background": "colors.background",
    "color": "colors.text"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 60
    },
    "hover": [
      0,
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V03, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "aura",
  "mechanic": [
    "wipe"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "angle": -24,
    "density": 30,
    "speed": 4,
    "color": "#FFFFFF",
    "accent": "#38BDF8",
    "background": "#0B0D10",
    "vignette": 0.7
  },
  "fields": [
    {
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": -75,
      "max": 75
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 60
    },
    {
      "key": "speed",
      "label": "Speed",
      "type": "number",
      "min": 1,
      "max": 12
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
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "vignette",
      "label": "Vignette",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Speed Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "speed-lines",
    "bundleSha256": "1ac745e4fd7f9c49f29e1c53bf468a4daa111dde2bb347de3bf5ad35b2fe17ae",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:43.032Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-paper.png",
        "sha256": "6ced7f65e43cd047c715e859c8c6eaf7131e2af2832cdf772286f06d9db31364"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-night.png",
        "sha256": "f6f0cfcf75c0babb9ba357c2131555121fb48caae3e502a8ff44eb3816edf5c3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-color.png",
        "sha256": "6d17712bc1ac8758dc74bc5c6ae28eebfa5ba519948161997d0afa914e08ad31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-paper.png",
        "sha256": "b5f85b3824adc7f2118915dff38e36bd26450fa5d3d1ae9caa3dd40c5d2d7caa"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-night.png",
        "sha256": "723d3e44f9327a1981d413fca58b6e6de9e3c81af2a7e0aec8939d6409a6aa2a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-color.png",
        "sha256": "aa67bcc7630ce2781e354f2fb099c32558dd412512860aa7e3d32938db520684"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-paper.png",
        "sha256": "f8c1e56a52a767fcf1ec4b5f34ad1affc8f35d2586bd8e60e7550353b916e73e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-night.png",
        "sha256": "caf38c3199c91340ab6fd4ecb1365aa8daa98747613f9deb6fa232d163e38e20"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-color.png",
        "sha256": "c20f73240037f035828a3aae71d9f022f4b9d27e96a115071d574fe035273714"
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
          "speed-lines--16x9",
          "speed-lines--9x16",
          "speed-lines--1x1"
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
            "paperNight": 7.716335720486111,
            "paperColor": 1.8918999565972223,
            "region": {
              "left": 0,
              "top": 71,
              "width": 1920,
              "height": 1009
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 12.787217881944445,
            "paperColor": 3.5205620659722223,
            "region": {
              "left": 0,
              "top": 7,
              "width": 1080,
              "height": 1913
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 10.78396267361111,
            "paperColor": 2.6761881510416665,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1075
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
            "occupancy": 1.3240635760477033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3240635760477033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3240635760477033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.412066562736206,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.412066562736206,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.412066562736206,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4106722936088019,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4106722936088019,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4106722936088019,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 0.5584852430555556,
        "frames": [
          28,
          108,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 0.2788628472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-60-frame-7.png",
                "sha256": "82cab74928ed3f03248936654e8f50da8564c12c2b5e5a5f1426e7d51cf4bc01",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-60-frame-27.png",
                "sha256": "b0f480c67c4a991e9fe553796460c25d8f02d493e724036b6a405cc14ae625fb",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-60-frame-52.png",
                "sha256": "8a490e6392ce23a233ef3b17676fcdcffd9d3437ef759f765b14e388e33f0865",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-60-frame-59.png",
                "sha256": "84c7fedaf0bb9fee5e0caf625cd98ea97807e68b641faa72dacc03021473d1b5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 0.6456163194444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-1800-frame-216.png",
                "sha256": "ba0f78bc0520d84677a2ab85fb3b151af35ee02260aa5872f96465e2b885b283",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-1800-frame-810.png",
                "sha256": "1f250b7356b762e9631b6511795de7f107ce3bb3ea0d01e1f2234903f0fa6578",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-1800-frame-1584.png",
                "sha256": "50cf8a8b0a01ec5f51cacf3f1512bbd60462935030b7501072cc20f1634303f2",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/16x9-duration-1800-frame-1799.png",
                "sha256": "1a0e06aad13f971a45483bb5d8aa4cdea467f23abd9f25bfc5d22ea7147c80e4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 0.3465711805555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-60-frame-7.png",
                "sha256": "83d27002888b1367cf7a70296ada0872793f0ce17c1b2cab48956c3d95592fc8",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-60-frame-27.png",
                "sha256": "f43f8cd646659c9728438a73fdbc3b3e60ecc2e2f7539ba558a292fe3e46f27a",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-60-frame-52.png",
                "sha256": "c051e3ebc93449543c1d0bd0ab4c62168415c38880d1c237d766493b7bd66cfc",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-60-frame-59.png",
                "sha256": "ac4a320433bb1938012f951540a01da9bb6d40344ae404c0b0a88da727db8d8d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 0.5072699652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-1800-frame-216.png",
                "sha256": "4e13646fd54beb825e42d26729e53c7369a08eb856deaa1078ab5212ef8af611",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-1800-frame-810.png",
                "sha256": "970ae17d351eac43e9635dc1b7c3f57c643882feb0de8df20ae63eb3b6a44ff5",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-1800-frame-1584.png",
                "sha256": "3aebfac07ab74568b104e2d1b687a210c84f8406b559bc21f942734bfef6bc2c",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/9x16-duration-1800-frame-1799.png",
                "sha256": "d8fffaaee972ef267c2ed65bcd58346def74f239f87decfc600d0f1ca4b3d150",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 0.5581597222222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-60-frame-7.png",
                "sha256": "33fdb825d99b34e3dad6472f61881f83621d3f4bfd08265ef57d75569bd00cc8",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-60-frame-27.png",
                "sha256": "a8d8a535daa3d9e7c73f244bad1a504c90029b6a0d9165993e87213802a6c45a",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-60-frame-52.png",
                "sha256": "0aeb2a8ef201e373b2c047ad44ddecb58cea647d92bae7c4996526661f8cdf33",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-60-frame-59.png",
                "sha256": "3b83b596c196fd529546fe1f0679638f9a18877e8640b3336fcc5551106bd0f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 0.8649088541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-1800-frame-216.png",
                "sha256": "f36e17ee87f493e3a5862ddb6d9330f58777d20c34273caffccdd9bc2caf6cac",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-1800-frame-810.png",
                "sha256": "e56c293e3ec157cfb571ad2956859cc53a85e31d5b9fbf441eb3c0b827b3a643",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-1800-frame-1584.png",
                "sha256": "0f19e8de9b165f16bee246196b74ba445bf3514fcec27cd23fa8ddc75f0de405",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/speed-lines/1x1-duration-1800-frame-1799.png",
                "sha256": "9a2db2eeaa36e8e630b88d8d95f98feffd0a63184c641e2f67fc8ec9f13372e2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Streaking speed lines over a dark field; on brand renders over transparency the lines are faint by design."
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
      "bundleSha256": "1ac745e4fd7f9c49f29e1c53bf468a4daa111dde2bb347de3bf5ad35b2fe17ae",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.987773Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/speed-lines/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/speed-lines/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/speed-lines/16x9/detail.mp4",
      "bg": "#0a1921",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "51132303d91c3fba0418dfac919f7004d3689fe1263ebcf642763f138df6200e",
        "loop": "cf6fe4a5cf2f81735f0746a95646fd971c08b14cc54fc9e02daaf227e4120920",
        "detail": "1e16bba52c836786fad9b3a34c7e30a25946a85af9187d475c9d50a93468f78a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/speed-lines/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/speed-lines/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/speed-lines/9x16/detail.mp4",
      "bg": "#0a1921",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "1e8ea116277a7db2f3fa5f5e0e0dfb8ba0a8cc1c51c76ac54e5fa61fb6ea8a11",
        "loop": "95b8d9e3a16d554161f4734acc8184023a0d60a929d79976dcc08cf5923905a6",
        "detail": "bcfab3d099cba8d235b53bb869c1a287995d8a888636f04795cf86199891c93a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/speed-lines/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/speed-lines/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/speed-lines/1x1/detail.mp4",
      "bg": "#0a1921",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "5965e3dae432d13a41b080203a42a4377c0611ae33d42fb2fbb8edc85ba2f08e",
        "loop": "1a5bd7b742be8f2b14689f1a1c2c740122aaae05e5ee831e6c3469019fd60279",
        "detail": "bf87157ed416d19eda7205280b95ff63a0acc9e66eb65155ecba6f8c83a89148"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1ac745e4fd7f9c49f29e1c53bf468a4daa111dde2bb347de3bf5ad35b2fe17ae/index.mjs",
    "sha256": "1ac745e4fd7f9c49f29e1c53bf468a4daa111dde2bb347de3bf5ad35b2fe17ae",
    "bytes": 49966,
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
      "loop": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:28:17.111Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
