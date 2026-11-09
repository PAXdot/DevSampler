// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/reveal",
  "tags": [
    "mask",
    "wipe",
    "slant",
    "sweep",
    "title",
    "reveal",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 20,
      "out": 0
    },
    "markers": {
      "settled": 22
    },
    "beats": [
      2,
      11,
      17
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "subline",
      "type": "text",
      "maxChars": 64,
      "lines": 2,
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
      "target": "title",
      "prop": "mask",
      "from": "left",
      "settledBy": 11,
      "easing": "ease"
    },
    {
      "target": "subline",
      "prop": "mask",
      "from": "left",
      "settledBy": 17,
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
    "sourceUrl": "motion recipe from research V09 (slanted mask title reveal); own copy"
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
    "title": "Built for speed",
    "subline": "Every component ships with its motion",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "angle": 20,
    "hairline": true,
    "align": "center"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "subline",
      "label": "Subline",
      "type": "text",
      "max": 64,
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
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": 0,
      "max": 40
    },
    {
      "key": "hairline",
      "label": "Hairline",
      "type": "boolean"
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "center",
        "left"
      ]
    }
  ],
  "name": "Slant Mask Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mask-sweep-title",
    "bundleSha256": "e7424a3ac13dafb3e55d455357dd611e0975d1da0e4b69e6f5cf3c77594b24f6",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:59.185Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-paper.png",
        "sha256": "6ba82fafb4644113d9137e20d818c417dc6bc2e60671be49e53ffc07fc898939"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-night.png",
        "sha256": "a1b2e0ce02fd74c142eaca55fa70a025c04161bde5b6e66c3095d3615d6953aa"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-color.png",
        "sha256": "b997f236320ebcf6561b43117b66e77f63e57eb4a611cf956f88ab56fe24b590"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-paper.png",
        "sha256": "85b193a3fc1ab423936f34a073691fb48a164831253ba3046abeb1854adbf247"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-night.png",
        "sha256": "c08793bd970db975a9e2e786cc43e60e98dcd76c55d20d58b30501848145b30b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-color.png",
        "sha256": "eec4b9e7dfc4ab3d11e81554ac7e1251ef37b6a8136b45ecd8e80558211c1366"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-paper.png",
        "sha256": "382b357b16a57f2248cee84c359ff2d4639ed38966fa2c6faea7c484fb9ec2f5"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-night.png",
        "sha256": "9a9dbebffa89450feae274332d1c55641ca9002b5c0747ce68cef6125a146ae6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-color.png",
        "sha256": "de71f240b84a7fb95963d53eba622aedd3cf7bdc3b68ff6433e4b9539a2cc2bc"
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
          "mask-sweep-title--16x9",
          "mask-sweep-title--9x16",
          "mask-sweep-title--1x1"
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
            "paperNight": 84.89670138888889,
            "paperColor": 38.095947265625,
            "region": {
              "left": 402,
              "top": 406,
              "width": 1117,
              "height": 285
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 61.359646267361114,
            "paperColor": 29.093098958333332,
            "region": {
              "left": 176,
              "top": 504,
              "width": 731,
              "height": 935
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 85.51624891493056,
            "paperColor": 37.601101345486114,
            "region": {
              "left": 226,
              "top": 464,
              "width": 628,
              "height": 160
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
            "occupancy": 0.42394495655129344,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4357916876991709,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.29179694881424795,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.930241781211799,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9617552251739174,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8878042842008204,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.23964570181639186,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.24481219290032735,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.16467968836673522,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 29.88205295138889,
        "frames": [
          3,
          22,
          74
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 29.88845486111111,
            "retainedAlpha": 0.9999500748876685,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-30-frame-3.png",
                "sha256": "ff4af1a46528ccee81838756b0141504186853f2d2122b930f2328b3ff6a63af",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-30-frame-22.png",
                "sha256": "a19379658343a72e73ce063ff897d439d4f5273de204c26e3c4adbc9d22df103",
                "alphaMass": 20029
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-30-frame-26.png",
                "sha256": "47b7a46a2ec3bae913664684922dc4d3a0df4e468c98e7b861c93a4ea24ee9d2",
                "alphaMass": 20030
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-30-frame-29.png",
                "sha256": "24d1f2fca656b234d01042568a713c38a9ef6a208baf22c717a9d6813947463d",
                "alphaMass": 20029
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 29.88205295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-600-frame-3.png",
                "sha256": "ff4af1a46528ccee81838756b0141504186853f2d2122b930f2328b3ff6a63af",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-600-frame-22.png",
                "sha256": "8a26d3a6fa4d2b828d5132cb802e42a8c653ac8140fe7cf921d5e5096c600319",
                "alphaMass": 20030
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-600-frame-528.png",
                "sha256": "e236237d15db4d077ef91caddaa27ba5841ed4b62ded96eec942f6d4a4e987d6",
                "alphaMass": 20029
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/16x9-duration-600-frame-599.png",
                "sha256": "a5e9ffb3527b190896e8b117360ec9b8131f0997bce2330c89010b5e1145b7c1",
                "alphaMass": 20029
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 44.4833984375,
            "retainedAlpha": 1.0000311565304087,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-30-frame-3.png",
                "sha256": "30ebc9497faa64f41120cbd82ae4714e048e41c1753cc2dfebbeeab85768491e",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-30-frame-22.png",
                "sha256": "e2c039c2de860ebf065ce271cbb49f94d00b0eb541a6b99209aaecaa91add380",
                "alphaMass": 32097
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-30-frame-26.png",
                "sha256": "908cd6c62b84f97ad600f83a947514e9b3e8443d9326ff43d19169092d25a0c8",
                "alphaMass": 32096
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-30-frame-29.png",
                "sha256": "2dc7f147f97895a8cab3f8119ec3d368ae230448d77fef169583535a3b9169f9",
                "alphaMass": 32097
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 44.4833984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-600-frame-3.png",
                "sha256": "30ebc9497faa64f41120cbd82ae4714e048e41c1753cc2dfebbeeab85768491e",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-600-frame-22.png",
                "sha256": "e9e0b43e8dfed2030d77a4f10cba46c232025d8c118e213485c646a2fa52bf8f",
                "alphaMass": 32097
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-600-frame-528.png",
                "sha256": "f4b0f815d0bb090314c4a5b8ac63bc6451e0bdd6a6678fc8469eaf6f047b6257",
                "alphaMass": 32097
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/9x16-duration-600-frame-599.png",
                "sha256": "8c3edbf75acaa2eddc1ff05aa739dfb5f41f67339265476c1253359a2bc428e5",
                "alphaMass": 32097
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 22.382921006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-30-frame-3.png",
                "sha256": "b513f4ae6edd1e8e86d76ed568bc819cbdd500307b2b4b0c8e39012f1ca22140",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-30-frame-22.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-30-frame-26.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-30-frame-29.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 22.382921006944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-600-frame-3.png",
                "sha256": "b513f4ae6edd1e8e86d76ed568bc819cbdd500307b2b4b0c8e39012f1ca22140",
                "alphaMass": 0
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-600-frame-22.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-600-frame-528.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/mask-sweep-title/1x1-duration-600-frame-599.png",
                "sha256": "9370d100e902f350427aa06d1ad67d1d7c0831d36107abeb595daa61dbea3a7e",
                "alphaMass": 11893
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
        "note": "A slanted mask sweeps the title and subline in."
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
      "bundleSha256": "e7424a3ac13dafb3e55d455357dd611e0975d1da0e4b69e6f5cf3c77594b24f6",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.008542Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mask-sweep-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mask-sweep-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mask-sweep-title/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "53e3727a1be70a7ff647c3c023a094bab24bd5bff852bc34fac8ac8f1afcff96",
        "loop": "81797abe8c0d3cb8e6018f41a9bea0d049e284abf57f7ad6b92abfea55053275",
        "detail": "c548a2367f4a85f8303931709ae07b2c2df9ecdf958ae684ee1d2294461af73a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mask-sweep-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mask-sweep-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mask-sweep-title/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "dd494013e752960835199167e2d351b11a71058472bf27e7489d53df9d17796e",
        "loop": "80c0b084e93a82242bb5a9e1d3eb9b11a7a36e2f8efc3a3fd6ce4c8dda9d3578",
        "detail": "ff57ea6440a48bba253fc852877a92808108c8c01161af66a1c99ca58676a9f8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mask-sweep-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mask-sweep-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mask-sweep-title/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "dc0fc198d0e1346a1778d80545b6d325cb5bab87313165986f8123e6672ae823",
        "loop": "735c8ca07199d83b14ec3aa9f13beb41b0dddacf6b38cd05ac0408148b9767de",
        "detail": "1728b58e98e30f1a8693eaefe92442fa681581e49a24b9c2857b431dce4f17ae"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e7424a3ac13dafb3e55d455357dd611e0975d1da0e4b69e6f5cf3c77594b24f6/index.mjs",
    "sha256": "e7424a3ac13dafb3e55d455357dd611e0975d1da0e4b69e6f5cf3c77594b24f6",
    "bytes": 160705,
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
    "at": "2026-10-07T02:32:20.844Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
