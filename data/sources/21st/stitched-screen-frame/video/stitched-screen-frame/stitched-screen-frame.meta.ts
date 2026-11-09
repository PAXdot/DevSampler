// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "hand-drawn",
  "mechanic": [
    "stitch"
  ],
  "tags": [
    "stitch",
    "thread",
    "seam",
    "screen"
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
      "role": "image"
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
    "sourceUrl": "21st first-party (Stitched Screenshot Frame, 2026-10-09)"
  },
  "defaults": {
    "primary": "#AB4B38",
    "secondary": "#CBAE77",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "screenshot": "",
    "caption": "Bring every detail together"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "image"
    },
    {
      "key": "caption",
      "label": "Caption",
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
  "name": "Stitched Screenshot Frame",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "stitched-screen-frame",
    "bundleSha256": "d19506f8db3f96bec20e89f33ce6108386571ddec04ba2ec012c86bc4ae27c8b",
    "sourceSnapshot": {
      "sha256": "de7e642bcc5aea77fca1b37a034278288bb6c3e6764a2876338cde9c7e59dadb",
      "files": 2190
    },
    "renderedAt": "2026-10-09T22:52:54.041Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-paper.png",
        "sha256": "38d04990a22ec57b5a2f484eb0858236854e0cbd4c323f409d95168e748d2963"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-night.png",
        "sha256": "a96462a44d20b0ec3b14dc260c97b08c27bc3656e19633584c3c9f876b9df0f0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-color.png",
        "sha256": "93b653d623573b82095f293714f841ee75b314e6520e931edda4521e0c941579"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-paper.png",
        "sha256": "1944b9eafaa7f5d73b6976ae4ba39450450a33a147d3523d29eca1ff6ba190af"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-night.png",
        "sha256": "c77f6df836a3bc693c0d0bf7555eeb636925846e22b48ba4cfd8da53366dde82"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-color.png",
        "sha256": "ac8dc6b7bfa48dc6ec601debe5c904a6eff24106b54834acf4efa52477dd875a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-paper.png",
        "sha256": "aedcaae6b8e5b19e7913e3fc42cad39ce289ea0802ac9ce88e9e3f6600547b26"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-night.png",
        "sha256": "ec3e6177d90e98c7cf261854a516e4df6d4c89aafe8194a2bed003217ecdf555"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-color.png",
        "sha256": "e282792a9acc03019cca7ecd05a063ab282998c8f8a88cae305be5cc52ccdc18"
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
          "stitched-screen-frame--16x9",
          "stitched-screen-frame--9x16",
          "stitched-screen-frame--1x1"
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
            "paperNight": 21.529541015625,
            "paperColor": 12.500840928819445,
            "region": {
              "left": 145,
              "top": 59,
              "width": 1656,
              "height": 915
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 23.074951171875,
            "paperColor": 13.482340494791666,
            "region": {
              "left": 69,
              "top": 127,
              "width": 968,
              "height": 1712
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.174560546875,
            "paperColor": 15.336724175347221,
            "region": {
              "left": 69,
              "top": 59,
              "width": 968,
              "height": 915
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
            "occupancy": 1.0356138983371128,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0356138983371128,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.023163895187705,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1326495618823664,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.130664778771591,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0479654824892923,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0761935089536503,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0761935089536503,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0632556634908195,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.002495659722222,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 6.364583333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-150-frame-18.png",
                "sha256": "a28b830a9735f1c74b8643f2cdfba02bfdca47603ac87d1614c7211efc695cc2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-150-frame-135.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-150-frame-132.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-150-frame-149.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.002495659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-600-frame-20.png",
                "sha256": "44b17f60f611a63be47cde6fec0c61fb1b488dc1429a0dd160650fa76e495bf5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-600-frame-135.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-600-frame-528.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/16x9-duration-600-frame-599.png",
                "sha256": "fd69474ddfec47d12bf6d857243296587861ad379dd6d762939979864a557495",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 7.376736111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-150-frame-18.png",
                "sha256": "a629687f5736b50afa5d0c8b0259909bb6f1a66c4d8ed46c299ec2f341793be9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-150-frame-135.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-150-frame-132.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-150-frame-149.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.948893229166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-600-frame-20.png",
                "sha256": "e8f5946545908457e483f6e62c6b9693c267b8d8423a1360b04a7fd13a43ca27",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-600-frame-135.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-600-frame-528.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/9x16-duration-600-frame-599.png",
                "sha256": "60c5f2118833e91e471068781f5bce2c36707222799c65338ba7977afaae8f42",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 6.753580729166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-150-frame-18.png",
                "sha256": "2d947fc5073369c74a23f1b64a52abfa04ce19b2c005f1f32f9cd9a16f9d1248",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-150-frame-135.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-150-frame-132.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-150-frame-149.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.484157986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-600-frame-20.png",
                "sha256": "db273fde0033be6ee2c4f2c8edadc7b68e25e820a6b63e6436fa80a1720381b3",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-600-frame-135.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-600-frame-528.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/stitched-screen-frame/1x1-duration-600-frame-599.png",
                "sha256": "1e6fbe32c3ab81b9436a7609c527a73fc9fe560a8c7158d58a6936ebad6d0a27",
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
        "note": "TitleMatches: The sequence supports 'Stitched Screenshot Frame'—the core imagery is a screenshot styled as if stitched into a frame, and the motion samples (images 2-4) depict a hand-drawn, irregular line being 'stitched' or drawn along the border, matching the visually implied effect. No visual effect or heading is unrealistically claimed beyond what is shown. \n\nnoBakedHeading: There is no decorative/block title visible; the only prominent text is the caption beneath the frame ('Bring every detail together'), which matches the supplied named slot content. No unaccounted-for block/category/language label is present.\n\nbrandAdherence: Images 5-7 clearly present three distinct rebrands of the poster matching the supplied palettes—green/black, green/blue/dark, and blue/violet/light green. Frame, stitch, text, and material all shift appropriately to the palette, and all elements remain legible in both light and dark settings. No unexplained fixed block colors are retained; only the interior artwork stays consistent, as expected.\n\nlanguageAdherence: The frame and stitching are consistently irregular and hand-drawn, matching the 'Irregular strokes, imperfect arrows and handwritten annotations' material note in the language card. The motion samples feature strokes being drawn (linear, non-shadowed, without glass or noise), and the palette switch maintains material and type roles. Caption font changes weight/casing with the brand but stays within sans and display roles, as stated. All changes and executions align with the language card's prescriptions."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 82,
        "compared": 82,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d19506f8db3f96bec20e89f33ce6108386571ddec04ba2ec012c86bc4ae27c8b",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:56:29.277Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "stitched-screen-frame",
      "vsPositive": 0.5,
      "vsNegative": 0.8333333333333334,
      "fakeVotes": 0.2708333333333333,
      "perModel": {
        "claude": {
          "vsPositive": 0.125,
          "vsNegative": 0.75
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.625,
          "vsNegative": 0.75
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "eae20475a0a631010939ab09a3f5b47211d4c6c7245357263fe3149e8a1896e4",
      "bundleSha256": "d19506f8db3f96bec20e89f33ce6108386571ddec04ba2ec012c86bc4ae27c8b",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/stitched-screen-frame/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stitched-screen-frame/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stitched-screen-frame/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e644811398469e5ca34b3b04256b11cc2c8de8e68cb264a9984829cc2554c27f",
        "loop": "fc7e788a15f1205aa13de8258f83fbac40e5c753ded404bf2cb140a8b83095fe",
        "detail": "ce334f0750d0b2bc6ddace7e3f58579097505df7819a0c539901dd7fada30b30"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/stitched-screen-frame/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stitched-screen-frame/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stitched-screen-frame/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "094f7fefae88945d2ade28d6aad2d73aee1817961e6bea2e5b55ab428b1d9b8b",
        "loop": "1734671e6ce2a89c7f121c780af3742097a018fe1ee30913f1d5ce21375b7d6d",
        "detail": "cd3ffab2ad811f056fc6d5809e9dd69c582279d0ce2f946bea2adca7824fe74e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/stitched-screen-frame/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stitched-screen-frame/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stitched-screen-frame/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8295d3fda34f741069f46c54a30fd863cf5af41c20c8a89f3d3df6e5089fc5f2",
        "loop": "b283398cede0250661b0ac31c67f346f99eed58778dd00e60aa622cc854e6e5f",
        "detail": "0a21e5f3b5ad2f36038705098887a48df324532729f553cfe533e3170a68b2fb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d19506f8db3f96bec20e89f33ce6108386571ddec04ba2ec012c86bc4ae27c8b/index.mjs",
    "sha256": "d19506f8db3f96bec20e89f33ce6108386571ddec04ba2ec012c86bc4ae27c8b",
    "bytes": 164716,
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
    "at": "2026-10-09T23:01:31.023Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
