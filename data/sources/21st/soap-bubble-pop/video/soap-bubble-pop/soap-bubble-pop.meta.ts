// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "pop"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "soap bubble",
    "bubble",
    "iridescent",
    "thin film",
    "pop",
    "droplets",
    "playful",
    "physics",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 110,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 100,
      "out": 0
    },
    "markers": {
      "settled": 100,
      "drift": 0,
      "bubble": 32,
      "thin": 30,
      "pop": 44,
      "release": 70
    },
    "beats": [
      0,
      30,
      44,
      60,
      76,
      100
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
      "maxChars": 40,
      "lines": 1,
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
      "target": "bubble",
      "prop": "position",
      "from": "below frame",
      "settledBy": 40,
      "easing": "ease"
    },
    {
      "target": "bubble film",
      "prop": "tear",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "droplets",
      "prop": "position",
      "settledBy": 96,
      "easing": "linear"
    },
    {
      "target": "logo",
      "prop": "scale",
      "from": "inside the bubble",
      "settledBy": 80,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "opacity",
      "settledBy": 34,
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
      "marker": "release"
    },
    "hover": [
      0,
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (thin-film soap bubble carries the logo in, tears open from one point and sprays droplets, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Fresh out of the bubble",
    "primary": "#E56399",
    "secondary": "#7FD1B9",
    "color": "#FCEFF9",
    "background": "#1A1423",
    "iridescence": 1,
    "wobble": 1,
    "droplets": 1,
    "companions": true,
    "fontFamily": "DM Sans"
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
      "max": 40,
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
      "key": "iridescence",
      "label": "Iridescence",
      "type": "number",
      "min": 0.3,
      "max": 1.5
    },
    {
      "key": "wobble",
      "label": "Wobble",
      "type": "number",
      "min": 0,
      "max": 1.5
    },
    {
      "key": "droplets",
      "label": "Droplets",
      "type": "number",
      "min": 0.3,
      "max": 1.6
    },
    {
      "key": "companions",
      "label": "Companions",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Soap Bubble Pop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "soap-bubble-pop",
    "bundleSha256": "a6317da6ae8527afc118ca5d1070c331b4596b5e63618541f9044140928abb32",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:26:31.366Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-paper.png",
        "sha256": "cd839fd992751a9721d836420e33b42f592fbb963047cbfd497ed1f7c45efc28"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-night.png",
        "sha256": "77a5785ea00f25a91b6c9ea91f8243ad4cfe2b216074bd1094c6eb5eefa8e2e8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-color.png",
        "sha256": "430b42be67d5eaac82c3370db3db58c2b33bfea18c8e41f10fd18b20608564ad"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-paper.png",
        "sha256": "c05e68bec40e1b05f4cb13e956d576a8d3b8500ffcf0d3e0e36cdd996a497c17"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-night.png",
        "sha256": "85e7e213d1f4bcd080fb404e63c2c62694e7dba4a56030b9a64f48a519eefeaf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-color.png",
        "sha256": "8aaa519249b33df923da3e77fdd727e117397de340f4b3289b39c87f436622d7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-paper.png",
        "sha256": "fbc6e5a75a4e25e379e64f900b7243ffc8eed2b753ed97b4c42e6198c58c459c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-night.png",
        "sha256": "29e29d914925437f7c1fc7db67d8572f7fb9382bbc11a87a95d1971240547a67"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-color.png",
        "sha256": "08e160525a705384baf2a92949f0805860ac91cfde6f170d5e092e2ab65bf7d5"
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
          "soap-bubble-pop--16x9",
          "soap-bubble-pop--9x16",
          "soap-bubble-pop--1x1"
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
            "paperNight": 10.678656684027779,
            "paperColor": 5.25537109375,
            "region": {
              "left": 238,
              "top": 34,
              "width": 1448,
              "height": 1031
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 13.47067599826389,
            "paperColor": 6.824734157986111,
            "region": {
              "left": 0,
              "top": 73,
              "width": 1080,
              "height": 1704
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 12.095323350694445,
            "paperColor": 6.035780164930555,
            "region": {
              "left": 22,
              "top": 33,
              "width": 1020,
              "height": 994
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
            "occupancy": 1.0189277775153274,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0193474251840655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0189277775153274,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2563184996220713,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.257794784580499,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2563184996220713,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2319142334574436,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2319142334574436,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2319142334574436,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.45041232638889,
        "frames": [
          10,
          70,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 110,
            "averageChannelDifference": 9.45041232638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-110-frame-10.png",
                "sha256": "167e1eeaf0c8066f592e6118224983078f5ebe68fd990fc20427f9ef39fc57b7",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-110-frame-70.png",
                "sha256": "154c888c91c348e49b3429f08c36defe6af4ae97504a9606c5db3bccce2a4931",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-110-frame-96.png",
                "sha256": "ca0a2d7d5d9de530ceb2abec7f6ea8d221678df4c558a01236bd8111fec4a285",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-110-frame-109.png",
                "sha256": "2835c51df2aab6f9a2156a0e8952f86f02fff099c019caf1880b6ee29c62fca1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.45041232638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-600-frame-10.png",
                "sha256": "167e1eeaf0c8066f592e6118224983078f5ebe68fd990fc20427f9ef39fc57b7",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-600-frame-70.png",
                "sha256": "374b4cf9fbc9178cea705a8fe4ab97b4e2f40547721cc09de2befeaa1855a257",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-600-frame-528.png",
                "sha256": "872e42a4ba34367dd3f5148e4cd1eff85a8cb6d9de6d56094ba7ad996ce9e9fe",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/16x9-duration-600-frame-599.png",
                "sha256": "577aa7f90094639d9b146ad190fbaba5d38eaf17d01a2671866075c935eb7498",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 110,
            "averageChannelDifference": 17.675672743055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-110-frame-10.png",
                "sha256": "e23735aeac9952a5315141b1e8ada8f64dd9d3239781a292eb4d8331eac106b6",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-110-frame-70.png",
                "sha256": "97e9dbaf8e819b207c3a6fae777e13b4045f4355828a743a2295f7f377b6d0ce",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-110-frame-96.png",
                "sha256": "44cfcbb634457807b671851dcca47c0510e9c8a9ccb4b246303bd1829afa30d7",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-110-frame-109.png",
                "sha256": "2b94dd1805672a0aaea8b6262af63eef2f2285518aa0ea10a142b4643dd76cbe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.675672743055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-600-frame-10.png",
                "sha256": "e23735aeac9952a5315141b1e8ada8f64dd9d3239781a292eb4d8331eac106b6",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-600-frame-70.png",
                "sha256": "97e9dbaf8e819b207c3a6fae777e13b4045f4355828a743a2295f7f377b6d0ce",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-600-frame-528.png",
                "sha256": "24a45a980b096d37268814bb88fed176628d58386357a10548587922195467b3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/9x16-duration-600-frame-599.png",
                "sha256": "938db73403fba40d0aace34d0843af11a72e9afb1f8b1a2d735bce05ca7fc781",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 110,
            "averageChannelDifference": 13.642578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-110-frame-10.png",
                "sha256": "a5746a612fee3393dd3f677a26641d951736979f875e20555468fbacec5fea44",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-110-frame-70.png",
                "sha256": "9dfebc0874c48054a3b03ca4894ef960dfeb3a05f9f68f15857be335850ab7d8",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-110-frame-96.png",
                "sha256": "4a8b1ba5d15f49475d9676e02316db8f3c80da18fc13bf0d47b13dc3fe219fef",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-110-frame-109.png",
                "sha256": "01a2d4517420c6fdcaafaf615c8707522185e8454cef2132652c1d04b229d897",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.642578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-600-frame-10.png",
                "sha256": "a5746a612fee3393dd3f677a26641d951736979f875e20555468fbacec5fea44",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-600-frame-70.png",
                "sha256": "9dfebc0874c48054a3b03ca4894ef960dfeb3a05f9f68f15857be335850ab7d8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-600-frame-528.png",
                "sha256": "3461c522ffb37a0f34a49473ac4c0abf4d358f4429c050c7f7ee7431211e1209",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/soap-bubble-pop/1x1-duration-600-frame-599.png",
                "sha256": "bed81555c70624ef5aab791c2802881da76201eaeda1a4c078059b235f0032ef",
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
        "note": "TitleMatches: The subject and structure support the title 'Soap Bubble Pop.' The initial poster (image 1) shows floating, translucent bubbles and overlapping, refractive shapes that relate to soap bubbles. The sequence (images 2-4) clearly shows a large bubble appearing, with an overlapping, depthy lens logo inside. The bubble then visually 'pops' in image 3, supporting the idea of emerging from or popping a bubble. No effect is simply named—it is visually present and follows through the short motion progression.\n\nNoBakedHeading: There is no evidence of a decorative or unexplained baked-in heading or label. The only text visible, 'Fresh out of the bubble,' matches the named-slot caption and is appropriately positioned as primary content rather than a decorative or redundant block title. There are no unmotivated category, language, or decorative headings.\n\nBrandAdherence: Images 5-7 are the same poster under three supplied palettes. The brand shapes, central translucent lens, and bubble forms remain consistent in form and material across all brands. Each uses clearly different color schemes that align with the palette swatches provided. There are no unexplained persistent block colors; text, ink, and backgrounds adapt appropriately.\n\nLanguageAdherence: All visible material matches the supplied language card: bubbles and lens forms are rendered with overlapping translucent layers, soft edge highlights vary with brand luminance, and parallax/shallow depth are present. Type treatment, including tabular numerals, remains consistent throughout both rebrands and sampled motion. There is no use of forbidden elements like generic opaque cards, neon glows, or blurred primary text. Overall, visuals and type roles remain true to the language card's required structure."
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
      "bundleSha256": "a6317da6ae8527afc118ca5d1070c331b4596b5e63618541f9044140928abb32",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:07.007Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "soap-bubble-pop",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 1,
      "fakeVotes": 0.08333333333333333,
      "perModel": {
        "claude": {
          "vsPositive": 0.625,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "561d80b161994bf8019729832a3a093aa13cca369489ac25c7e7def72270a499",
      "bundleSha256": "a6317da6ae8527afc118ca5d1070c331b4596b5e63618541f9044140928abb32",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/soap-bubble-pop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/soap-bubble-pop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/soap-bubble-pop/16x9/detail.mp4",
      "bg": "#1a1423",
      "posterFrame": 70,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9d4caec3ca89cee2b105cc6dc8e82a68a7b9444f3a09003b8999cd9d7b254e26",
        "loop": "aa82d5370f2dd31722fd0ae3e8727939c74866ec7bf4da5aafe791cf4c4b04af",
        "detail": "ba20bf850070e217060eeb3f32680ac3c28fba9f81683a93a7606f86597264c2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/soap-bubble-pop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/soap-bubble-pop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/soap-bubble-pop/9x16/detail.mp4",
      "bg": "#1a1423",
      "posterFrame": 70,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "5d1014ce1355f442372bfb0be1ead8b46a9c222687f577762c7d7498f78b9a16",
        "loop": "bd5db117f837cfba4d6e394f3033c450a9b873de9edbd2a34fd1cb0ceddabc33",
        "detail": "2813fde6f2f6943e994387e18ddff1b7914a6c3ce3284cf5899442fb602803a1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/soap-bubble-pop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/soap-bubble-pop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/soap-bubble-pop/1x1/detail.mp4",
      "bg": "#1a1423",
      "posterFrame": 70,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "63d46a5fa1290b82eee8d8067ba06cb4d2bb93cb8fc717fc88c372c4bbdc78a8",
        "loop": "8a4672098adfcf9df0200dc0fe5fb672e7b151418f49ff2dfb2b19d5187402f8",
        "detail": "c63177520107e2d97d54423e6c35e5cc8d530dbee860b5f75955dc83220cdf4e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a6317da6ae8527afc118ca5d1070c331b4596b5e63618541f9044140928abb32/index.mjs",
    "sha256": "a6317da6ae8527afc118ca5d1070c331b4596b5e63618541f9044140928abb32",
    "bytes": 173839,
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
    "at": "2026-10-09T19:57:57.183Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
