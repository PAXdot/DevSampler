// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "align"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "color wheel",
    "concentric rings",
    "gerstner",
    "swiss design",
    "geometric",
    "emblem",
    "badge",
    "mechanical",
    "alignment",
    "opener",
    "brand"
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
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "open": 0,
      "spin": 14,
      "click": 60,
      "lock": 116,
      "shine": 116
    },
    "beats": [
      0,
      14,
      60,
      74,
      88,
      102,
      116,
      150
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "lines": 3,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "rings",
      "prop": "thickness",
      "from": "closed",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "rings",
      "prop": "rotation",
      "from": "spinning at different speeds",
      "settledBy": 116,
      "easing": "ease"
    },
    {
      "target": "rings",
      "prop": "rotation",
      "from": "three steps off",
      "settledBy": 116,
      "easing": "spring"
    },
    {
      "target": "plate",
      "prop": "scale",
      "from": "closed",
      "settledBy": 20,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "scale",
      "from": "small",
      "settledBy": 128,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 142,
      "easing": "ease"
    },
    {
      "target": "shine",
      "prop": "angle",
      "from": "twelve o'clock",
      "settledBy": 150,
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
    "sourceUrl": "21st first-party (Gerstner-style concentric color-step rings spin independently and tick into one aligned emblem around a large logo on a center plate, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Everything in its place",
    "primary": "#2EE6B6",
    "secondary": "#7AD7FF",
    "color": "#E9FFF8",
    "background": "#071A1F",
    "rings": 5,
    "steps": 16,
    "grain": true,
    "fontFamily": "Inter"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "subline"
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
      "key": "rings",
      "label": "Rings",
      "type": "number",
      "step": 1,
      "min": 4,
      "max": 10
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "number",
      "step": 1,
      "min": 12,
      "max": 36
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Concentric Color Rings",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "gerstner-color-rings",
    "bundleSha256": "3866d80b6797b0b861f1b2301b013d6fb21c77e27886e0ae770753ea9b64599d",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:27:10.048Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-paper.png",
        "sha256": "45845e1fc83998bbb709c070deec1ee46fc9c204bc91f7e2faac828cc5c8680e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-night.png",
        "sha256": "8161eb9a43511944950623d645d6cf59a2b77370ededd39cbec556db4d8fba0e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-color.png",
        "sha256": "c7d6d07371f8688cf04185ff07bcc32cc4af2b4d5f4b36ec14c9e2facef307ea"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-paper.png",
        "sha256": "33de83bdf16cfbb6891bdc001ce81143628da3400066dbd1b91120a759ed45ed"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-night.png",
        "sha256": "8f4c491e27e7d9c8081a7ff256cd5b58aa643180e7b630508e710f521317a5c3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-color.png",
        "sha256": "7e01c95d8ba93145ab79ba8c466ecfd0a1afc8d02abff3024e3813430ab390c4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-paper.png",
        "sha256": "9be5356b41c25d1998532e76958f6b3fb6972ca26b9e8cdff98946f85c8bcf40"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-night.png",
        "sha256": "307c98c4947c79b7ed9e4580903c9de67c72e3939d415136c5169c196548ea2e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-color.png",
        "sha256": "94fe850d587c2a1ab33b201dada4c985a14596e964cd2b3b4b55a786531ea72b"
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
          "gerstner-color-rings--16x9",
          "gerstner-color-rings--9x16",
          "gerstner-color-rings--1x1"
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
            "paperNight": 43.747341579861114,
            "paperColor": 12.438178168402779,
            "region": {
              "left": 172,
              "top": 60,
              "width": 1568,
              "height": 974
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 54.53271484375,
            "paperColor": 15.540608723958334,
            "region": {
              "left": 27,
              "top": 274,
              "width": 1026,
              "height": 1289
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 56.154378255208336,
            "paperColor": 17.274088541666668,
            "region": {
              "left": 157,
              "top": 60,
              "width": 766,
              "height": 837
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
            "occupancy": 1.0131265244009129,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0288065843621401,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0079376561581426,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8746086204543547,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.903892372921391,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8746086204543547,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7458847736625516,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7790191693961537,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7449661963550854,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.08181423611111,
        "frames": [
          21,
          150,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 8.214409722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-150-frame-18.png",
                "sha256": "79ce6863f360e5c6e72f5b2faf31983cc0af45f5f10420dd7fc287a94fd9a678",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-150-frame-149.png",
                "sha256": "c0704346c282af949e71b5be795994acc213116c2e0727eb13f86ce4935f2600",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-150-frame-132.png",
                "sha256": "a3ca0d873f6334344bfb8be1d8707fb9196534abde84e85d14d2cb6f3cf749e7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.2744140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-600-frame-22.png",
                "sha256": "a26da58245270b53537f4841ca55d8f771fedadc8a268cc1fd4ba68c922a5252",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-600-frame-150.png",
                "sha256": "82c031b6d107a5a037ff0a5729493dfd0a9d170fab1ef210d21efafdc1dbdbb2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-600-frame-528.png",
                "sha256": "1c1a2ecda079c05abe097086209a0afea689d2017dafa81437900497ecb714f0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/16x9-duration-600-frame-599.png",
                "sha256": "1c1a2ecda079c05abe097086209a0afea689d2017dafa81437900497ecb714f0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.587999131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-150-frame-18.png",
                "sha256": "030b92475aaca1f31ce637d8c794ce7200619ec92bd827466a63d7c82336d89d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-150-frame-149.png",
                "sha256": "8f443e8b13e569517f67e240bd403c3d48e2430016c80d4b97b72b58e8950270",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-150-frame-132.png",
                "sha256": "ef02538dc7d271c32c768b90295e3260faf994ce5be7c99269ebfc9a3d9fd6f6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.949869791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-600-frame-22.png",
                "sha256": "d11a279d50df279a9837eeb75fc6c9a489d85a5452d3e57d906cb65a851a4cd0",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-600-frame-150.png",
                "sha256": "c1d489651059051519239f8cb3cde397d66a0a2919ccb93fc56ce181a0243fdc",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-600-frame-528.png",
                "sha256": "3888beb8c55cb965af2c937d0825f474ea568053d338eafeb2d7a9f169190bf1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/9x16-duration-600-frame-599.png",
                "sha256": "3888beb8c55cb965af2c937d0825f474ea568053d338eafeb2d7a9f169190bf1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 7.5654296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-150-frame-18.png",
                "sha256": "da8321686088e46584b4dab3cbfa3e9b2a4bf54f70a89e116256f895257f6632",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-150-frame-149.png",
                "sha256": "b8839913669ea26a0eb7bda8b8d4dfbb887a52c8265459bcdb7cefd67d634b68",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-150-frame-132.png",
                "sha256": "9893abd01b93c4802e671922c25daf51d6c8c02bde87d3906f5da15d95f494e7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.73752170138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-600-frame-22.png",
                "sha256": "2cecacaea88f2da3a1080aa6319e2173ea045f4a09253e5109aac0efca413472",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-600-frame-150.png",
                "sha256": "1c287454d30ea53088c2e0afac6ec5196b44596889cabb824754f53a2c6f64d8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-600-frame-528.png",
                "sha256": "28ae6e47cd79df913cb661485a20859d0283df13283aecc6fa9d93280c93da2f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/gerstner-color-rings/1x1-duration-600-frame-599.png",
                "sha256": "28ae6e47cd79df913cb661485a20859d0283df13283aecc6fa9d93280c93da2f",
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
        "note": "1. titleMatches: The subject is a set of concentric rings in varied colors with a prominent central graphic, matching the title 'Concentric Color Rings.' The motion samples (images 2–4) depict assembling or rearranging of the segments, which supports effects of assembling and replacing in concentric rings, matching the claimed title and subject. There are no effects misattributed by title only; the named heading 'Everything in its place' is legit as the caption. \n\n2. noBakedHeading: There is no decorative or unexplained category, language, or block title visually baked into the poster. The only prominent text is the named caption, 'Everything in its place,' which matches slot content and isn't decorative branding or label outside allowed roles. No unexplained or extraneous heading appears in the composition.\n\n3. brandAdherence: The final three images (5–7) clearly show the same graphic in three palette treatments: one beige on white, one purple-green on dark, one green-blue on light green. In each, the shapes, type, and all elements remain visually legible and consistent, and the supplied text roles ('Everything in its place') are always readable and appropriately colored per palette (high contrast, consistent fill). No unexplained brand block colors are present, and central graphic and rings adapt properly to palette swaps.\n\n4. languageAdherence: The supplied language card references oversized, sans-serif type as headline, concentric forms, and static-background design. All images and palette swaps maintain the same layout, graphic compression, and material structure with flat color fields, sans-serif display, and tabular numerals (though none are shown, the sans 'body' and accent type suffices visually). No language or material feature inconsistent with the language card is evident; all items conform across rebrands and motion samples. No card was missing."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 36,
        "compared": 36,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3866d80b6797b0b861f1b2301b013d6fb21c77e27886e0ae770753ea9b64599d",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.792Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "gerstner-color-rings",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "81c378ff79a36d7ed9628c1115b789bb83c6dde3b6c45d5ffcc3790d20e405ed",
      "bundleSha256": "3866d80b6797b0b861f1b2301b013d6fb21c77e27886e0ae770753ea9b64599d",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/gerstner-color-rings/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gerstner-color-rings/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gerstner-color-rings/16x9/detail.mp4",
      "bg": "#06171c",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7ffe10d694fc8540c2aabef98a1907d37efa416d7d1be489d20c74ef0e4fb8a7",
        "loop": "53e1e0f079e289eaad112a4b4bc5ecf98525cefe5dc134165b388a9ecdb53aaf",
        "detail": "3cdb5dccbbb8d5658bfa1a36b855cd4c90217c3f15662c822b28a96f95b7080f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/gerstner-color-rings/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gerstner-color-rings/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gerstner-color-rings/9x16/detail.mp4",
      "bg": "#06161b",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "04ed1e9af86c8dc014fd4c317b3fde2d9d9426cca34cf481731a22e169c80513",
        "loop": "f0ad2a7692cdf4d2dc0ff98c8d3104ca8c9de8f570a923ab75cf7669ac77f1d5",
        "detail": "d0166f043f5b91ba7f9b534d9dbe35a721673b82f8a7f2dd6e0c65cbae199fa5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/gerstner-color-rings/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gerstner-color-rings/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gerstner-color-rings/1x1/detail.mp4",
      "bg": "#06161b",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e3a8a7b2d45bbe7433056004dd40b15add7166d762e053c730eeed3055467eb4",
        "loop": "1c010e92a47862a83915e49d53a04ad9d17b958a581434e5b6001b997869b116",
        "detail": "62c44dfc1c64661600bfb3a33096f8f339f2edc4d9323dab123065c0d671a74f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3866d80b6797b0b861f1b2301b013d6fb21c77e27886e0ae770753ea9b64599d/index.mjs",
    "sha256": "3866d80b6797b0b861f1b2301b013d6fb21c77e27886e0ae770753ea9b64599d",
    "bytes": 170117,
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
    "at": "2026-10-09T19:55:24.216Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
