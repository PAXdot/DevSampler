// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "oscilloscope"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "oscilloscope",
    "lissajous",
    "signal",
    "phosphor",
    "scientific",
    "ring",
    "frame",
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
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 136,
      "out": 0
    },
    "markers": {
      "settled": 136,
      "power": 0,
      "converge": 38,
      "lock": 100,
      "logo": 104
    },
    "beats": [
      0,
      12,
      38,
      100,
      104,
      122
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
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "beam",
      "prop": "amplitude",
      "from": "a single dot",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "lissajous figure",
      "prop": "frequency ratio",
      "from": "5:4",
      "settledBy": 94,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "phase",
      "settledBy": 128,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "focus",
      "from": "blurred, small",
      "settledBy": 128,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 136,
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
    "sourceUrl": "21st first-party (oscilloscope Lissajous trace with phosphor persistence locks 1:1 into a ring around the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "In sync",
    "primary": "#FF4F00",
    "secondary": "#202020",
    "color": "#202020",
    "background": "#FFFBF0",
    "lobes": 4,
    "intensity": 0.8,
    "grid": true,
    "grain": true,
    "fontFamily": "Geist"
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
      "key": "lobes",
      "label": "Lobes",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 6
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "grid",
      "label": "Grid",
      "type": "boolean"
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
      "brand": "fonts.heading"
    }
  ],
  "name": "Lissajous Lock",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lissajous-lock",
    "bundleSha256": "ee28abaa9ac7e052e05a68a64791d8ae34556b6825de8e3a40ad831845eea23c",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:25:11.796Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-paper.png",
        "sha256": "85a088584310d21acdecc57138520c0e27f7e17c0f3cfe6647b0f9c488e50ef6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-night.png",
        "sha256": "ce48e61d9d387573362d77cea40fe92f4d1f763bf5d719120223d9458f622ea5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-color.png",
        "sha256": "ce76813a01db6f3a9130d6ea27f946aadf62e468fd36d30279080fb9f0d5c97d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-paper.png",
        "sha256": "d4e0c494b7b606bfbfc7aa9ce71ad9823636f7e607cab4fa377ec55cdee71661"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-night.png",
        "sha256": "1db0dc043e6ea9bc44d79734807ec061041832640bc4fff2cb0b8e5d4315e5a2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-color.png",
        "sha256": "fa0e2bb7f0d52ddda767f7a00951bd96fb2fc5b3f7c2026313a05a3c9dd89183"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-paper.png",
        "sha256": "6facc0d9051c272ad03a0b805c252724ad1677c57b9724c076fb22a3ec58d752"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-night.png",
        "sha256": "2d1c4128177abbcaad550d092035647558c026c79a46f02c51079ab6013b0384"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-color.png",
        "sha256": "0e93c4d7dbbc892d72a6f4a4d59f54072eb883f64cddf466580bd7db3d872a5a"
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
          "lissajous-lock--16x9",
          "lissajous-lock--9x16",
          "lissajous-lock--1x1"
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
            "paperNight": 24.726698133680557,
            "paperColor": 3.8262803819444446,
            "region": {
              "left": 15,
              "top": 0,
              "width": 1891,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.35101996527778,
            "paperColor": 5.230794270833333,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1804
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 37.23792860243056,
            "paperColor": 7.299045138888889,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.3958274281935,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2873204837490555,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3958274281935,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3316090325018899,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.299130763416478,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3316090325018899,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4093600403124216,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.347981770833333,
        "frames": [
          20,
          136,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 140,
            "averageChannelDifference": 4.167209201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-140-frame-16.png",
                "sha256": "632fbb29db61dd255425bd43364cc1b2d15c0eb8e872e05558a506eb1945df0d",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-140-frame-136.png",
                "sha256": "d76c28c386a58412c93ce48291dcfaac95ddec1e2adca0cbce1d088f5d903c6e",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-140-frame-123.png",
                "sha256": "28b51930037fc07f24f7d0565759ab322462e8eb7741213969cc385ef527f751",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-140-frame-139.png",
                "sha256": "14206956aa1dc2397e4a3c673e6a2217f9bb7b0a28be60eb572b2e66de26e179",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.347981770833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-600-frame-20.png",
                "sha256": "159d2796e7c70bc4bcdb7999859223eff9bfcc2362311ba6f2174d4055ac0f29",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-600-frame-136.png",
                "sha256": "d76c28c386a58412c93ce48291dcfaac95ddec1e2adca0cbce1d088f5d903c6e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-600-frame-528.png",
                "sha256": "1781afe5065c713c1011020f0cd7d7913f32c3a4bc8eaad0e1c095ef17355ffc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/16x9-duration-600-frame-599.png",
                "sha256": "220ca1d534aee519d6fc890c8fbd6ca7f65d1a9bfeb6fb6031329565e717b58e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 140,
            "averageChannelDifference": 5.281901041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-140-frame-16.png",
                "sha256": "358a9c0a03ef14997f5e73ec365f6939c09ec0af0179336692a465d5ff1ae444",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-140-frame-136.png",
                "sha256": "7296c11f7badd9f7998ff332a193a8b00affcc6a05b0747192a383dd2b29d2d1",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-140-frame-123.png",
                "sha256": "503ac9b9132a88bbb9ad5111d9dfdd0126d6b092f2b418552e5fef050ab0530c",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-140-frame-139.png",
                "sha256": "040276f88fe04de689d0169ba7c518a5b28ebeb4ce2c61d01ddf60d64f910943",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.420247395833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-600-frame-20.png",
                "sha256": "76489f82e631bc6a7901db3f118e34e0098bf4adc60befee3cace44581bb99b1",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-600-frame-136.png",
                "sha256": "7296c11f7badd9f7998ff332a193a8b00affcc6a05b0747192a383dd2b29d2d1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-600-frame-528.png",
                "sha256": "1c0a87fe2b30e8bbc5003f56467cfc455cc92a1dce537d27a76c3dfd4d7796f4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/9x16-duration-600-frame-599.png",
                "sha256": "040a8c2e27be87f2bbcce2356296242603d708a8f6c72dcacfcfc27a535bbe4e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 140,
            "averageChannelDifference": 5.906467013888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-140-frame-16.png",
                "sha256": "402d9cfb487006c33bb6269b185861eae9a527f25d95c8f851a3f9e0aa92d75a",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-140-frame-136.png",
                "sha256": "2ba23e7560aff58070873b11f53367047d53dfbfb4a77bb81e9d4609437e1f52",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-140-frame-123.png",
                "sha256": "6638997c1c1bc2dfad4467ee9e527505ef7206d3ebbfa825bed90ef3de6b4b31",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-140-frame-139.png",
                "sha256": "5388b12b2c0591a9487c88f917648fdfbe3b36e0f3b075e9488a53832518b2a9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 6.115993923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-600-frame-20.png",
                "sha256": "62660024b2e2d87f31dec4e0ce6c06df3da705a7963b97c812fa4b77a774de08",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-600-frame-136.png",
                "sha256": "2ba23e7560aff58070873b11f53367047d53dfbfb4a77bb81e9d4609437e1f52",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-600-frame-528.png",
                "sha256": "a35ba95aa988bc49df9bae85cb05838cdf651585fb53342141c8710f9210c5da",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/lissajous-lock/1x1-duration-600-frame-599.png",
                "sha256": "da05f7d8e01b5d7d8da8de92467258a5fd23ff506b8dfe2716ebfa8d9a232da8",
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
        "note": "1. TitleMatches: The imagery is consistent with 'Lissajous Lock.' The first image/poster shows two overlapping geometric shapes centered in a target-like field, suggesting synchronization. The next three images (chronological motion samples) show the circle's rotation and the resulting Lissajous pattern, confirming both the concept and the mechanics of phase-locked orbits, as well as completion of a cycle. This is visually evident in the return to the same central configuration, supporting the 'Lock' aspect.\n\n2. NoBakedHeading: There is no decorative or unexplained block heading. 'In sync' is legitimate named-slot content, placed as a caption, and there are no additional prominent headings embedded in the composition.\n\n3. BrandAdherence: The three rebranded posters (images 5 through 7) each employ visibly distinct palettes that adhere to the supplied primary/secondary/text/background colors. The key motif, shapes, and aura effects remain preserved and legible across all palettes, with appropriate palette-driven adjustments (e.g., contrast of the background and aura effects), and no unexplained block-color retention.\n\n4. LanguageAdherence: The material and type roles remain consistent throughout: the main subject is in sharp focus against ambient gradient fields, light sources provide diffused auras, captions are set in sans-serif, and numerals/ticks use a tabular style. There are no inconsistencies with the supplied language card, and the design steadily avoids 'never' elements."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 19,
        "compared": 19,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ee28abaa9ac7e052e05a68a64791d8ae34556b6825de8e3a40ad831845eea23c",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.836Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lissajous-lock/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lissajous-lock/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lissajous-lock/16x9/detail.mp4",
      "bg": "#f7f3e9",
      "posterFrame": 136,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0be50d0461ff820ea5e02aa4dc6f4599ed657493c3283006e2e09b3b496516e6",
        "loop": "0fb41aa080c76f93c812ccbedc475acee9083951f272db4bc9a9b61bf0e01727",
        "detail": "65c0159f7f80beeeff5a4a1e3075ebc9e9ec2cf541f119c429b3a6b604085226"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lissajous-lock/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lissajous-lock/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lissajous-lock/9x16/detail.mp4",
      "bg": "#f9f5ea",
      "posterFrame": 136,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "efc4a9882a2f5d3a6ff0061850afdf131c30ec63f411afcc3e608cbfd8145d7b",
        "loop": "137131b5206be4eb2495e97c5fde30f16c3034e5c09acb87853e54463fac98fa",
        "detail": "0e57854c12afb594e62ea19c86ba6fd82f2b09862e7ef2f4a84103baa574a931"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lissajous-lock/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lissajous-lock/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lissajous-lock/1x1/detail.mp4",
      "bg": "#f9f5ea",
      "posterFrame": 136,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dbac1b779f4aa2a26f7d9c19c1a533d3fa8522da2c367d39eff744250b0ae6cd",
        "loop": "33f2ebcc0862252123277011f8fe1a35eaec34cc18929cbf9c9dcd8b0e38d224",
        "detail": "7e0d81dd58ab858ad9855c0a179c427293d37356f71f3fccc6a4b29d7d32b9ba"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ee28abaa9ac7e052e05a68a64791d8ae34556b6825de8e3a40ad831845eea23c/index.mjs",
    "sha256": "ee28abaa9ac7e052e05a68a64791d8ae34556b6825de8e3a40ad831845eea23c",
    "bytes": 170151,
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
    "at": "2026-10-09T10:45:50.455Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
