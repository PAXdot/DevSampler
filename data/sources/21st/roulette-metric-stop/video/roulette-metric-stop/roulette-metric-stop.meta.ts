// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "isometric",
  "mechanic": [
    "wheel"
  ],
  "tags": [
    "wheel",
    "roulette",
    "number",
    "stop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      30,
      65,
      100,
      135
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
      "key": "value",
      "type": "number",
      "role": "heading"
    },
    {
      "key": "label",
      "type": "text",
      "role": "caption"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
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
    "sourceUrl": "21st first-party (Metric Wheel Stop, 2026-10-09)"
  },
  "defaults": {
    "primary": "#BD4532",
    "secondary": "#CEA65B",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "value": 73,
    "label": "Make every turn count"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99,
      "role": "heading"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 35,
      "role": "caption"
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
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Metric Wheel Stop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "roulette-metric-stop",
    "bundleSha256": "d76cf18ab2d50e049165253cf58ae93b4f0cd71e66a5c40c81a989421a7ecb03",
    "sourceSnapshot": {
      "sha256": "de7e642bcc5aea77fca1b37a034278288bb6c3e6764a2876338cde9c7e59dadb",
      "files": 2190
    },
    "renderedAt": "2026-10-09T22:54:13.947Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-paper.png",
        "sha256": "b1b1914d665e772214eb5ecc8d172fb0442264503253c98fa9cbc24d74b7a53a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-night.png",
        "sha256": "6e635712c0800adb3c74c5c084ad2930bf7db1dbe0b33206b31f3e2e391e271e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-color.png",
        "sha256": "91309a0edb48e95e97d0ff988aa33c610ff24921a947d834599d6ec14e23c977"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-paper.png",
        "sha256": "21ac2efccc8a32d2fa268a409bc03dfae43fcb5a4023dfe715d038398e533eb4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-night.png",
        "sha256": "edc76e29d03a05bb213abfa1ba1d2a0ce1eed204ca10deac46df1da1aeb4512e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-color.png",
        "sha256": "318aaf8c7b327d2f0e692f6015fd6ca22ab98db388f76081e57e08da0348aebc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-paper.png",
        "sha256": "e555cf56c1f936c236fdaa79e238257fe2cdce81a9e4029eb1e20ecd20c4da38"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-night.png",
        "sha256": "1e49bd758b0aac74ca0ab59aa4da8e9ced156bd57fe813a0d0094a0cce0da204"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-color.png",
        "sha256": "8973c85b13da7ae682a6030c03c133cc750917486acb64c86fcc471403f790e5"
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
          "roulette-metric-stop--16x9",
          "roulette-metric-stop--9x16",
          "roulette-metric-stop--1x1"
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
            "paperNight": 29.24004448784722,
            "paperColor": 21.07052951388889,
            "region": {
              "left": 239,
              "top": 56,
              "width": 1482,
              "height": 888
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.249186197916664,
            "paperColor": 25.918077256944443,
            "region": {
              "left": 94,
              "top": 215,
              "width": 895,
              "height": 1438
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.558756510416664,
            "paperColor": 26.14960394965278,
            "region": {
              "left": 87,
              "top": 202,
              "width": 917,
              "height": 600
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
            "occupancy": 0.8921682098765434,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8994512156714539,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8545393466028388,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8570216924218249,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8790149209761067,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8445060766075979,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6626879146720418,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.668520151544843,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.668520151544843,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7514105902777777,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.5231119791666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-150-frame-18.png",
                "sha256": "70de114f25ac5e193328c333b38f2de8c47b19dc494f321ca67735715f957e3c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-150-frame-135.png",
                "sha256": "1ca9979e9c7c2cd3fa89a73cef0212eb487bde7fa016fead6781de7d6fd9cd15",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-150-frame-132.png",
                "sha256": "4187df79dc45cc06bae87a1291a5d7dfd0d2939a318009dc7b06b98858c77a6e",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-150-frame-149.png",
                "sha256": "1ca9979e9c7c2cd3fa89a73cef0212eb487bde7fa016fead6781de7d6fd9cd15",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.7514105902777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-600-frame-20.png",
                "sha256": "a5341877c047e22d4deab9c629675895bf67a88478ef30b4ca0f6b032cc6dbe8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-600-frame-135.png",
                "sha256": "2068f3b8fe7b5649b6b03f3c3be4176c4752c6cd6eda2aa887d990e61d748d94",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-600-frame-528.png",
                "sha256": "d107749e3e0f67fe4a01dda3754b1a46ee77f95eca771711ba76a1ee84d2a34d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/16x9-duration-600-frame-599.png",
                "sha256": "1ca9979e9c7c2cd3fa89a73cef0212eb487bde7fa016fead6781de7d6fd9cd15",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 2.4527994791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-150-frame-18.png",
                "sha256": "29d94b4a98ff085c98df07406472ee5b5f387e788098ad891c5b20f6d4bc7a38",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-150-frame-135.png",
                "sha256": "2c431a826b5b6562400329e04576fc5c18f56007966ac2d13c30b09772acc173",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-150-frame-132.png",
                "sha256": "a8e7348b519f4e6e6650a50d86b7914f0fa8052909ab42c419bd1677933d8401",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-150-frame-149.png",
                "sha256": "26a43c4da57e78d799a37acf6aa42618e5a2aae20c42928266feb4b425bb7ec2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.8173828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-600-frame-20.png",
                "sha256": "4c1a11a360afea08893e1d45b041796f00030a68bd4987bc4ee1597581614615",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-600-frame-135.png",
                "sha256": "26a43c4da57e78d799a37acf6aa42618e5a2aae20c42928266feb4b425bb7ec2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-600-frame-528.png",
                "sha256": "1d5721767ce3e0cb5fd751d338e142f3300e57de089b6a1256d2666f25e72db5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/9x16-duration-600-frame-599.png",
                "sha256": "2c431a826b5b6562400329e04576fc5c18f56007966ac2d13c30b09772acc173",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 2.696506076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-150-frame-18.png",
                "sha256": "70e341bca711738869ec6d9540d124c0645ee338bf8e8422c96e43790ef4c35c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-150-frame-135.png",
                "sha256": "0558d58bb0e2c4a0ed7471f234037eea38a3265069a6fae4eb228f5d4348ca07",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-150-frame-132.png",
                "sha256": "8ed009479adbc58da2e92997fd60af7c8f47d55dec320b1deb6e35faa2164a76",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-150-frame-149.png",
                "sha256": "0558d58bb0e2c4a0ed7471f234037eea38a3265069a6fae4eb228f5d4348ca07",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.8575303819444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-600-frame-20.png",
                "sha256": "bcc51ab516378b57b1e257a338f8687397aaffe13ee9fe5fcab5c1b7681dc670",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-600-frame-135.png",
                "sha256": "2b21635b78c7b7afde785397e5940b0e8bfbbce61af18b839fcc3e2f9abb4ee8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-600-frame-528.png",
                "sha256": "2b21635b78c7b7afde785397e5940b0e8bfbbce61af18b839fcc3e2f9abb4ee8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/roulette-metric-stop/1x1-duration-600-frame-599.png",
                "sha256": "8ed009479adbc58da2e92997fd60af7c8f47d55dec320b1deb6e35faa2164a76",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject is a rotary dial with numbered increments and a pointer, which changes position across the motion samples, supporting the 'Metric Wheel Stop' title – the dial's angular motion and position evidently 'stop' at various metrics (numbers). The pointer and numerals are synchronized with the number readout, demonstrating a direct link between the object's state and the title claim. \n\nNoBakedHeading: There is no decorative, unexplained, or unrelated heading or label embedded in any poster or motion frame. All text elements ('73', 'Make every turn count') match the named slot content and are clearly part of the editable/legible content, not decorative or extraneous.\n\nBrandAdherence: Images five through seven are clearly three rebrand variants (green, purple, and light purple/blue), faithfully using the supplied palettes (first light, then dark, then color). In each, the instrument and all text remain legible and maintain correct shape and material; there is no unexplained block of fixed color, and all brand/material roles are preserved (dial as ground plane, ink as text and markings, accent as volume/path). \n\nLanguageAdherence: All images use sans-serif display and body type with tabular numerals, and numerals/labels remain consistent throughout. The extruded, shaded dial maintains directional face shading and coherent ground in every palette and frame. There is no sign of UI fakery, floating or unanchored labels, or inconsistent perspective; parallel projection is maintained without card tilt. Motion samples align with the 'rise, assemble, travel' verbs with easeOut-like transitions between distinct dial stops. Language is therefore adhered to in both display and motion behaviors."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 32,
        "compared": 32,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d76cf18ab2d50e049165253cf58ae93b4f0cd71e66a5c40c81a989421a7ecb03",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:56:29.408Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "roulette-metric-stop",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.0625,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "a3976096bf620d04268bcbf70cb61dc1668423380caf6c2e633f770d78617192",
      "bundleSha256": "d76cf18ab2d50e049165253cf58ae93b4f0cd71e66a5c40c81a989421a7ecb03",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/roulette-metric-stop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/roulette-metric-stop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/roulette-metric-stop/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "565a6f22b356f6b5402f67c1ba992bca45ede0c3eea45d26396b11ee7d64ee99",
        "loop": "9522688f058a0a83fa0c56dc817d9f5d800ee52399f975b9ab0d71e468825e64",
        "detail": "b36565ea983482bdd2ac34622668781a17e81aa0afa4b5b228fb71021aa6c26c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/roulette-metric-stop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/roulette-metric-stop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/roulette-metric-stop/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2c7879c0b4276ceabf5f4860d7f73914050880b82c53bec9252975d8501552b1",
        "loop": "521bfdd19c566f7df2d09e1a06ef5aec9822810329933685c7a2e78867d3b654",
        "detail": "e6aa740c621aea4b8a53abc7be339fe9cccc0088b219c173dfc96820c258a93e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/roulette-metric-stop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/roulette-metric-stop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/roulette-metric-stop/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fca1958d646b0ba55023270c544acbbfcefb11a9080a1a5000f9ca1fae4f518c",
        "loop": "3ca9aa85d819e92cb926ca4b61091b73fbb38360cc69a0b9ff77874dd53990ac",
        "detail": "608773540e32448bc0df6f4234db8d7808098f03892912be28c001b0de7d2e3c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d76cf18ab2d50e049165253cf58ae93b4f0cd71e66a5c40c81a989421a7ecb03/index.mjs",
    "sha256": "d76cf18ab2d50e049165253cf58ae93b4f0cd71e66a5c40c81a989421a7ecb03",
    "bytes": 160092,
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
    "at": "2026-10-09T23:02:27.409Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
