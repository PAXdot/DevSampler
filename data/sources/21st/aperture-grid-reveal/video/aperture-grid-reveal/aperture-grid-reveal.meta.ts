// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/craft",
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "aperture"
  ],
  "tags": [
    "aperture",
    "iris",
    "screenshot",
    "camera",
    "grid"
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
      "key": "image",
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
    "sourceUrl": "21st first-party (Iris Grid Screenshot Reveal, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A7B8A4",
    "secondary": "#C9AA62",
    "color": "#F2F0E5",
    "background": "#1B2925",
    "fontFamily": "DM Sans",
    "seed": 31,
    "image": "",
    "caption": "A clear view, one frame at a time"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "image"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 38,
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
  "name": "Iris Grid Image Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "aperture-grid-reveal",
    "bundleSha256": "a0f9e9cd879bb1e7f8a622b7e0c99e0ccda6c1c51a2c0038998da55e2b6fe0a3",
    "sourceSnapshot": {
      "sha256": "4d15cc6a8610042e258ba365d1aef0b9449d075bb3cded6312271d209ce210ec",
      "files": 2106
    },
    "renderedAt": "2026-10-09T21:43:49.462Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-paper.png",
        "sha256": "2108860ee83f91e978f2a2797f87b44286b66b60d50c357bbb7ac0d6c85e1387"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-night.png",
        "sha256": "bddd517e9419d819ea171e423c44c1ecdbfd946fed5f569ea98df04bcb1243db"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-color.png",
        "sha256": "27e23fe2e8976266ed318d808b0cddb5071e707a4d02ba579b8cbafceb76497e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-paper.png",
        "sha256": "b8820e6d0d6fbcc8bef714b6f24e74522a6d9ed9a9a51bff4e97ca316365ed4c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-night.png",
        "sha256": "f4a334069e13d799054680122c0f837c7f450081eb35889cd12eb8e103a2ee4c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-color.png",
        "sha256": "36e230da936bef2263f7a5887a1757dadb2f2e46dd6f60bde2a458d5d189a1be"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-paper.png",
        "sha256": "70fb82adc9e0aea607a1922e8f46e704941f36329e56fa7e22b0cc278e283432"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-night.png",
        "sha256": "9464f420305b1c9b29dfe7cc911f3b9135976c36b03f7e7cc835e585c3df6a2c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-color.png",
        "sha256": "18c2982d8b74a1e971680d2975f8fa280f8cb219d6e7f8271ff9a0562c72e734"
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
          "aperture-grid-reveal--16x9",
          "aperture-grid-reveal--9x16",
          "aperture-grid-reveal--1x1"
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
            "paperNight": 5.883219401041667,
            "paperColor": 1.8302951388888888,
            "region": {
              "left": 132,
              "top": 73,
              "width": 1656,
              "height": 886
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 11.719536675347221,
            "paperColor": 4.240098741319445,
            "region": {
              "left": 74,
              "top": 133,
              "width": 932,
              "height": 1667
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 8.052815755208334,
            "paperColor": 2.721896701388889,
            "region": {
              "left": 74,
              "top": 74,
              "width": 932,
              "height": 885
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
            "occupancy": 1.001659344293273,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.002791162761401,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0005275258251451,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0605877188838502,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0618616981257525,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.058039760400045,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0010645776371823,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0021970036299843,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9999321516443799,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 77.93424479166667,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 77.9345703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-150-frame-18.png",
                "sha256": "3adbfd8f30d60773d4619ffd399e38ef14e26b3821a74f626a02eabf049edec4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-150-frame-135.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-150-frame-132.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-150-frame-149.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 77.93424479166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-600-frame-20.png",
                "sha256": "94e73d93062da550899553dfe2c86b7dec0c3c37af40125e214829cecf57ef40",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-600-frame-135.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-600-frame-528.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/16x9-duration-600-frame-599.png",
                "sha256": "24e3c0e6d7e2386736afc0569f38ee920409a7c59a205d5c4fda75691ceb29e3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 82.27191840277777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-150-frame-18.png",
                "sha256": "74b972d77ced36940ff5943f272ea57ef83ef7beaf60d16c07423fa0a16969fe",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-150-frame-135.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-150-frame-132.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-150-frame-149.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 82.2421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-600-frame-20.png",
                "sha256": "60dcc257a5d8911e865d31dfe6176a5ddf425a11b79d67b9e2b39706459206fd",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-600-frame-135.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-600-frame-528.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/9x16-duration-600-frame-599.png",
                "sha256": "06f35388dfe3eec3ed234fcd3f885b9abc481514e86e1fa148ed71babf3e73d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 79.1552734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-150-frame-18.png",
                "sha256": "d0f6a395ec35690d0905fa97d38cf3f481f8b55b1d834bbd3548faf38816064f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-150-frame-135.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-150-frame-132.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-150-frame-149.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 79.1337890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-600-frame-20.png",
                "sha256": "e8f5e6ce21a76332fb99a71a1a54beff17e3047092a22c9847cfdd9d9fd19bc7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-600-frame-135.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-600-frame-528.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/aperture-grid-reveal/1x1-duration-600-frame-599.png",
                "sha256": "1157098d1913f35ee030eb157862f1c55b46790b4814f9ae2f53b81dffc31d0d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The first image shows a poster with a visible grid overlay, and the next three images show a grid-based reveal animation with the grid shattering in an iris-like pattern. The claim 'Iris Grid Image Reveal' is supported—motion samples show an iris-like (multi-radial) reveal effect acting on image grid segments, rather than a generic fade, wipe, or simple cut, matching the spirit and visual language of the title.\n2. noBakedHeading: There are no decorative or unexplained block titles, category, or language labels baked into the poster or rebrands. The only type present is the caption matching the named slot content, which is allowed.\n3. brandAdherence: The fifth through seventh images show the same layout/poster rendered under three brand palettes, each using different background and text colors in harmony with the given palettes. The grids and captions are clearly legible and respect the supplied colors, with no visible fixed colors or unadapted elements.\n4. languageAdherence: Across all rebrands and in motion, the structure (grid, photographic/print style, caption roles, and materiality) remains consistent with the language card. The clipping/cropping and stacking align with 'reveal', 'stack', 'crop' motion verbs, and palette/role materiality as described in the card."
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
      "bundleSha256": "a0f9e9cd879bb1e7f8a622b7e0c99e0ccda6c1c51a2c0038998da55e2b6fe0a3",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:52:24.890Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "aperture-grid-reveal",
      "vsPositive": 0.75,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.16666666666666666,
      "perModel": {
        "claude": {
          "vsPositive": 0.5,
          "vsNegative": 0.75
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "5745b733a69ecc1eeaaa514401442228dca57b1c0844f85084202cd87751797c",
      "bundleSha256": "a0f9e9cd879bb1e7f8a622b7e0c99e0ccda6c1c51a2c0038998da55e2b6fe0a3",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/16x9/detail.mp4",
      "bg": "#1b2925",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bd9b3ca6b60779b95e55d8b77df32e99d26b5a81bcf4181991e16ef99b470bd9",
        "loop": "769ae813d2ff4860a6896956e22060cfb814cb20629b0b76703ab455440a7cd1",
        "detail": "53b54c64aeaab0fe3f47f31ceca085c2d4d4a2f3fdd236b1d496d44bf40b7bd5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/9x16/detail.mp4",
      "bg": "#1b2925",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3c257b624edf15228ef2a74c8bd94632f58c46524d899084dc816451d68da394",
        "loop": "0e31bb32d38496a42c674268a7000b88733c379f6788a78fea6cde99ade4cbeb",
        "detail": "1c04907ada1b663a2470f7be35248f126cd25dfc458b3f63244c9aa18af147c8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aperture-grid-reveal/1x1/detail.mp4",
      "bg": "#1b2925",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6403d1c8675da128901514a85e872283b00766dfef35df936e8dad8ba14fc27b",
        "loop": "bdc0195628acdd8c9975633799eff6bb9e34d014619d56cbe6e8c14c5dd0de00",
        "detail": "e9b18a94ee475fcedb8a20385b4e1e6f62f0b96657eacc9ab1b020fa7e813dd5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a0f9e9cd879bb1e7f8a622b7e0c99e0ccda6c1c51a2c0038998da55e2b6fe0a3/index.mjs",
    "sha256": "a0f9e9cd879bb1e7f8a622b7e0c99e0ccda6c1c51a2c0038998da55e2b6fe0a3",
    "bytes": 164760,
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
    "at": "2026-10-09T22:01:13.518Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
