// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "isometric",
  "mechanic": [
    "unfold"
  ],
  "tags": [
    "unfold",
    "cube",
    "photography",
    "paper",
    "net"
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "caption",
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
    "sourceUrl": "21st first-party (Photo Cube Unfold, 2026-10-09)"
  },
  "defaults": {
    "primary": "#2C6D58",
    "secondary": "#DAB664",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "screenshot": "",
    "caption": "A different point of view"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
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
  "name": "Screenshot Cross Unfold",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cube-net-unfold",
    "bundleSha256": "d8f1657e2accecb682eb4b01d48f77ca1338bc04bf4a9eb80897aa9b69ebfa24",
    "sourceSnapshot": {
      "sha256": "3c8f9beca2d21af5776a406cc9ca7e375f382a45fef2346630c17a4221a87761",
      "files": 2046
    },
    "renderedAt": "2026-10-09T20:57:20.649Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-paper.png",
        "sha256": "87b8437fa9e373c9f82b2b981529521ffe26ba2db674324ae3740f30f8de6be7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-night.png",
        "sha256": "4eef20b39346fcb97a90206f8495dd86ad11d1e6bdf076f93f651d5e14eb09da"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-color.png",
        "sha256": "cccbed2e64f1863fec35e5c11821724117eac920e1ed097c1d3507df9021ff1e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-paper.png",
        "sha256": "06a00395ccdf29678bfda44095c0ccd39c5e986f301b23da87ef50b88078253a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-night.png",
        "sha256": "46f28c26dde23fbade69a944d0f3347d9913d468484bd2d087bf50a471e6017a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-color.png",
        "sha256": "4134a723d57037debc8894fc818e08ddaa926a1dd8d27edccaa6cca46e4f1d6a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-paper.png",
        "sha256": "29cf6df9924d3f0479f7871531426568eba867a71196a5dbfb22421b61fd45b1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-night.png",
        "sha256": "3fcfdc1adc3f0f5c726e519f41ecb8c15a66103d80f228a80660a228c0941ee9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-color.png",
        "sha256": "b8929009ce8887e945881f663602da3ff932f361b040ea44a1bc5a34f4c56628"
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
          "cube-net-unfold--16x9",
          "cube-net-unfold--9x16",
          "cube-net-unfold--1x1"
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
            "paperNight": 13.021484375,
            "paperColor": 4.867051866319445,
            "region": {
              "left": 332,
              "top": 98,
              "width": 1017,
              "height": 866
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 18.42214626736111,
            "paperColor": 7.171712239583333,
            "region": {
              "left": 114,
              "top": 399,
              "width": 865,
              "height": 1408
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.887505425347221,
            "paperColor": 4.823649088541667,
            "region": {
              "left": 21,
              "top": 164,
              "width": 841,
              "height": 800
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
            "occupancy": 0.6019428894242884,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6019428894242884,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5936018794091712,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8312236127732988,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8324060076705582,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7656006959754068,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8174852016709749,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8174852016709749,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8052229236459103,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.769639756944445,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 4.694878472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-150-frame-18.png",
                "sha256": "7b0c8a110a2bf275197667e2414de85d061993402d1783f3c337b83828994cfc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-150-frame-135.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-150-frame-132.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-150-frame-149.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.769639756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-600-frame-20.png",
                "sha256": "013a518e93f40564554e05e141c940cb20c1ae6505ba8f04616a4c84a01fc8c4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-600-frame-135.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-600-frame-528.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/16x9-duration-600-frame-599.png",
                "sha256": "ad9664f99ad7f37be104c21e224f82dc3a1f00124f48b66822eb7c0871fde0b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 6.980143229166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-150-frame-18.png",
                "sha256": "4d9c7239edce877cea36f19a65052dd82ca427c75ec88a34b96bb0cd23bb4e83",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-150-frame-135.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-150-frame-132.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-150-frame-149.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.059678819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-600-frame-20.png",
                "sha256": "e196d8c921e32afd93da7536501451c4887870531392e2c397be84c199827b4a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-600-frame-135.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-600-frame-528.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/9x16-duration-600-frame-599.png",
                "sha256": "83588a1ff51b2950aa6f478fc4fa10ea6b4a8058dd81ef654268437b8185181a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 5.871744791666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-150-frame-18.png",
                "sha256": "81770a81fc67401290bdbc0276086420b1056c342ab921614fa4812cbf28979b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-150-frame-135.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-150-frame-132.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-150-frame-149.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.9296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-600-frame-20.png",
                "sha256": "8efab8c4d81d3822369c9e4c339473f2ab2393235a13575d2dbe4b402707ba26",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-600-frame-135.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-600-frame-528.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/cube-net-unfold/1x1-duration-600-frame-599.png",
                "sha256": "0c0db93efffe748949abbdda152f3b8d2173c0a1a340475f01e7f913a0d0f017",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The composition shows a cross-shaped arrangement of interface panels in the poster and then motion samples where they rotate and unfold with a perspective change, supporting the 'Screenshot Cross Unfold' title by visually demonstrating a cross made from interface screenshots that unfolds and offers a different view. The motion also aligns with the idea of changing viewpoint or perspective, as indicated by the 'different point of view' caption.\n\n2. noBakedHeading: There is no decorative block-title or unexplained label baked into the artwork; the displayed caption ('A different point of view') matches the named slot content, and all text serves a clear content role. There are no generic or unexplained headings present in any frame.\n\n3. brandAdherence: The final three images show the poster design re-rendered in three distinct, clearly visible color palettes (light, dark, and a pastel green variant). Borders and text colors visibly shift according to supplied palettes, while maintaining shape, structure, and legibility. There are no fixed, unexplained block colors—every area of color changes appropriately.\n\n4. languageAdherence: Throughout all palette and motion samples, the artwork maintains extruded interfaces with visible parallel edgework and directional brand-based shading. Lighting, material, and type composition remain consistent. There is no random 3D tilt, unrelated perspective, or flat UI; type and numerals are sans-serif and tabular. All requirements listed in the language card are fulfilled and consistently upheld in every brand state and motion frame."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 75,
        "compared": 75,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d8f1657e2accecb682eb4b01d48f77ca1338bc04bf4a9eb80897aa9b69ebfa24",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:08:48.035Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "cube-net-unfold",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.875,
      "fakeVotes": 0.1875,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 0.625,
          "vsNegative": 0.75
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "b14bfda88f445a52364cfa0c3b2aeb2ba25ef74ad75adfd5da400cbb98cb8b41",
      "bundleSha256": "d8f1657e2accecb682eb4b01d48f77ca1338bc04bf4a9eb80897aa9b69ebfa24",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cube-net-unfold/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cube-net-unfold/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cube-net-unfold/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "adbcc63253ed007eb471c9ef25a0955154519448110153b23fedfd954da480ef",
        "loop": "aac35326cf548a4d303bd1f12c52a3aa7c054bef2008f41c604133bd61025a49",
        "detail": "6f265a8ce1b8bc21bddcf98d4a23274efd40d71438aaa711cd2d0da1aa46fca7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cube-net-unfold/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cube-net-unfold/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cube-net-unfold/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "03b1d918ae122d0659dd7d9f87bad71d1ba88044f5d6ddfe2c5c4f430aa69302",
        "loop": "72c6431a44cb24c919587928baf56e3c4b117ed37c9d6eadc2fcfd1cb19e3400",
        "detail": "a48e7955d1861ded8ccdb80dfd22a63e2a7e38dccf4b136d9bf52d5ea04738a2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cube-net-unfold/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cube-net-unfold/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cube-net-unfold/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "045482720359b6b3995cff15136e9b84cb9df0ea09b5f540c5b6a2ce33825993",
        "loop": "4d2ad457acf7b85d932aa512a790863e8099f83f1f74724aa421c24381746fa4",
        "detail": "183bcd74a0f35dc0c94152cfff68b12bb03274820fe9e4871694be43e16c854f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d8f1657e2accecb682eb4b01d48f77ca1338bc04bf4a9eb80897aa9b69ebfa24/index.mjs",
    "sha256": "d8f1657e2accecb682eb4b01d48f77ca1338bc04bf4a9eb80897aa9b69ebfa24",
    "bytes": 164278,
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
    "at": "2026-10-09T21:15:32.980Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
