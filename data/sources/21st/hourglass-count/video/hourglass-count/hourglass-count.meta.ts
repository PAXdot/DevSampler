// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "hourglass"
  ],
  "tags": [
    "hourglass",
    "sand",
    "progress",
    "count"
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
      "type": "text",
      "role": "metric"
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
    "sourceUrl": "21st first-party (Hourglass Progress Count, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B3914B",
    "secondary": "#D9C38B",
    "color": "#2A382F",
    "background": "#F2EEDF",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "value": 75,
    "label": "One grain at a time"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
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
  "name": "Hourglass Progress Count",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "hourglass-count",
    "bundleSha256": "e822ae04407c333d184afd6ebb983bcce9916a7b3c256463b253f656b9eb19bc",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:48:28.123Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-paper.png",
        "sha256": "f38bee1dfc678469fc9e9b85aad044d6af23404a56df7c9ad35c11f2fe7eb202"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-night.png",
        "sha256": "ad2dc89a7a53da0f18e30c045db991bb1ad96d65daa2a9552c857dcdc7a3cdba"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-color.png",
        "sha256": "5058de757e303aaf1617601d375a1fee8382c06f43c7b478716c8cf034d3063b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-paper.png",
        "sha256": "b4b14f741379911143af5653f306dc9c1302c77934ae338f823964805fe0f002"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-night.png",
        "sha256": "c9be16bb9e50bb3b37b12e8469130146118b3239dbf7b06fff387861b6836dd3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-color.png",
        "sha256": "c42455a5b1d82f9db53c13df0ee514b2fbc413b5985a0e78580f74d559205df2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-paper.png",
        "sha256": "5009b8d25a6230796a05b6c0a75f4f8cc45160e65e72dc52722d315e65b48491"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-night.png",
        "sha256": "642d2a95d533522fa1631359d7f03d991e009be572e85a68b84cfdda9e6913ea"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-color.png",
        "sha256": "a2daf8c22dd7c8aacccad1e57838dbd3a571768577f23f8be61d49a34a266bac"
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
          "hourglass-count--16x9",
          "hourglass-count--9x16",
          "hourglass-count--1x1"
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
            "paperNight": 40.40546332465278,
            "paperColor": 17.003662109375,
            "region": {
              "left": 228,
              "top": 67,
              "width": 1421,
              "height": 795
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.803955078125,
            "paperColor": 21.171956380208332,
            "region": {
              "left": 170,
              "top": 130,
              "width": 741,
              "height": 1678
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.823811848958336,
            "paperColor": 18.32131618923611,
            "region": {
              "left": 110,
              "top": 67,
              "width": 859,
              "height": 795
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
            "occupancy": 0.7693905108339634,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7721072852366256,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7367892180020158,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.828029096154923,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8488064400142775,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7288910934744269,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.82976327533757,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.82976327533757,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8152738118567044,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.9889322916666667,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.9892578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-150-frame-18.png",
                "sha256": "c4ad8d1f69bae3fb17a252610cf9b7a4b2a8fc59f6485f3c901cc76d96bb1d35",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-150-frame-135.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-150-frame-132.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-150-frame-149.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.9889322916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-600-frame-20.png",
                "sha256": "c40aa7b73dad7abac278ac8deb569431b58bb53db1b35ee2a0ee5cc297f50861",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-600-frame-135.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-600-frame-528.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/16x9-duration-600-frame-599.png",
                "sha256": "f8891a3c936533f60b5267e02d33579c0baa7240fa9764ccce507732ab8b875a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 2.778103298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-150-frame-18.png",
                "sha256": "02dec1f61296538fd467685bb6b4fd3b075e588dd16b381e4da52a096477a49f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-150-frame-135.png",
                "sha256": "af50bfbe2a9cd5ea41c242fed6dc16823e82e3ff2a160ad6dfbdc2749399549a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-150-frame-132.png",
                "sha256": "e64bc4e55f019c7ccbb169bcb06365b717f9719ccc047d3a50e9b9275f5f8766",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-150-frame-149.png",
                "sha256": "9bf1bbd8d985bc59ffdd0ee885ab7045127fbf6d008b9ba18b9897b9f58a53d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.7777777777777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-600-frame-20.png",
                "sha256": "2fa519e3cf8fb2bc23c8e13046735736570d3dfcedcde8efc36dce514656bdcb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-600-frame-135.png",
                "sha256": "9bf1bbd8d985bc59ffdd0ee885ab7045127fbf6d008b9ba18b9897b9f58a53d1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-600-frame-528.png",
                "sha256": "af50bfbe2a9cd5ea41c242fed6dc16823e82e3ff2a160ad6dfbdc2749399549a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/9x16-duration-600-frame-599.png",
                "sha256": "af50bfbe2a9cd5ea41c242fed6dc16823e82e3ff2a160ad6dfbdc2749399549a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 3.6282552083333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-150-frame-18.png",
                "sha256": "890c15442bd10f077c76fb0f3b51a09ea71c93922f65947048a110fd72bd5b49",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-150-frame-135.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-150-frame-132.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-150-frame-149.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.6276041666666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-600-frame-20.png",
                "sha256": "4ac4a4c937b90a90bf119399bddf83c18c12f32869342f1ce54ab6b48c3972b7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-600-frame-135.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-600-frame-528.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/hourglass-count/1x1-duration-600-frame-599.png",
                "sha256": "bf8a23774d16a2c234741979c4efbccc758062cb95bba58ac30a25652eabb2ea",
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
        "note": "1. titleMatches: The visible subject is an hourglass with discrete grains falling, and motion samples show grains dropping one at a time as progress (percent value) increases, with the editable slot 'One grain at a time' matching the imagery. This clearly supports the claimed 'Hourglass Progress Count' title and subtitle, as progress is visually represented by individual grains, not by a generic progress bar or other effect.\n\n2. noBakedHeading: There are no superfluous, decorative, or unexplained block-titles or headings directly integrated into the poster's design outside of editable content. The text '75%' and 'One grain at a time' are editable values directly tied to named slots, and all other text is legitimate (not decorative block-labels).\n\n3. brandAdherence: Images 5-7 demonstrate three rebrand palettes, all visibly legible and adhering to supplied colors and theming for environment, text, and accents. Shape, clarity, and material are preserved. No unexplained fixed colors appear; each variant respects its designated palette.\n\n4. languageAdherence: Across all palettes and motion samples, consistent material use (soft shadow/lens effect on glass), visible depth, branded highlight/edge rendering, parallax consistency (suggested by slight shading changes but maintaining a persistent subject), sans type, and tabular numerals are visible. No neon glow, blurred text, or generic opaque cards are present. Consistency with the supplied language card is maintained."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 31,
        "compared": 31,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e822ae04407c333d184afd6ebb983bcce9916a7b3c256463b253f656b9eb19bc",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.170Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "hourglass-count",
      "vsPositive": 0.8333333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
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
      "framesSha256": "14bea8690a0b20aa9bec467896ae189db70793dbb9850229230f58991a57de3b",
      "bundleSha256": "e822ae04407c333d184afd6ebb983bcce9916a7b3c256463b253f656b9eb19bc",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/hourglass-count/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hourglass-count/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hourglass-count/16x9/detail.mp4",
      "bg": "#f2eedf",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "424fd730dac0582b3094c0923eb1bca95522c736eb2a64924c79449b4e97688f",
        "loop": "17a4a7bc01b45876a5745f65f4ad1dc535bec0e3ad250b4e1c7053da0f71add0",
        "detail": "eac5ab0900c81889fd491e6a91841f6e18e649598a1a5979701c83e8518f4b7b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/hourglass-count/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hourglass-count/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hourglass-count/9x16/detail.mp4",
      "bg": "#f2eedf",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9a6d123d4d7cc72ea54d891001ee776b8cca4e23e76d1173d9c80687dee2b339",
        "loop": "4959cb4db6df33273d0d1e2977772418ecb865e88f2687fca02e744e9a1de612",
        "detail": "426856ada52782792aa65f1027ca5d097e1673dab9e627051600eff81d26a19e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/hourglass-count/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hourglass-count/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hourglass-count/1x1/detail.mp4",
      "bg": "#f2eedf",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ba8b29a00404d6a568ef656119dd9a256bdca1d158179cf27a8a3d740dd3b08e",
        "loop": "7cdbeec3c7b3116493957e85bbf24e2d8c7ca2556de2b1bf1cdb37f76743bdd2",
        "detail": "5cc55a5241c4a0e9f1f249e53670b40fa43a38e143d33937f21acdc5d33313ec"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e822ae04407c333d184afd6ebb983bcce9916a7b3c256463b253f656b9eb19bc/index.mjs",
    "sha256": "e822ae04407c333d184afd6ebb983bcce9916a7b3c256463b253f656b9eb19bc",
    "bytes": 160527,
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
    "at": "2026-10-09T23:04:39.953Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
