// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand-motion",
  "job": "logos",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "ex-partner-braid",
    "expression",
    "typography",
    "source-adaptation"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
    "preset": "full",
    "backdrop": [
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Better together",
    "subtitle": "Two perspectives moving toward one shared direction.",
    "items": [
      "One Studio",
      "Your Product",
      "One shared direction"
    ],
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
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
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Partner lockup braid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-ex-partner-braid",
    "bundleSha256": "889dbc26f74436c6b9363d924bd7c59e533bc42b41a4a345da46999d994ad580",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:52.057Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-paper.png",
        "sha256": "1f1e29f8a47818a2808279a5b67ed2ae76a80fc17d380647ee662a186eaa4635"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-night.png",
        "sha256": "53ca4e9a177689fdfee18fff0836b0ea8861e162f4ab06140facba023a7e48c7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-color.png",
        "sha256": "f5d62794ceb03b2021b1399b266eff8dcbdb916a457d02578edfeb653e36137a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-paper.png",
        "sha256": "4671e96ccf2a009301528be63599e9a0222333744bd96b09b3593689fa2abd60"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-night.png",
        "sha256": "9b1a0e77fbed4786914f1201cd48796a694a8a758191e8c7c5e4d237aea5219f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-color.png",
        "sha256": "311b507c9f931fdc302dacdc049e98d415a99dea3b763221fced9d85ba54d67c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-paper.png",
        "sha256": "05e16c5fef4f215bf94a996b792dc5887a8190aff1411e3a1ba2fdd97d937522"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-night.png",
        "sha256": "336538ce64fd2e6e6cf4323de13794c4bc9e6d9fa6ef66e36c8ed9b1f2fb4c72"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-color.png",
        "sha256": "4eec4982b5063357be7c61073d9662349393a63ea605cc9e1d9ef266519a17d2"
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
          "lp-ex-partner-braid--16x9",
          "lp-ex-partner-braid--9x16",
          "lp-ex-partner-braid--1x1"
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
            "paperNight": 48.700358072916664,
            "paperColor": 6.992648654513889,
            "region": {
              "left": 154,
              "top": 283,
              "width": 1460,
              "height": 725
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 93.81966145833333,
            "paperColor": 11.749213324652779,
            "region": {
              "left": 89,
              "top": 455,
              "width": 868,
              "height": 1328
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.70844184027778,
            "paperColor": 10.337754991319445,
            "region": {
              "left": 87,
              "top": 283,
              "width": 825,
              "height": 725
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
            "occupancy": 0.723447976155483,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.723447976155483,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7224501168780271,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7878331373701746,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7878331373701746,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7872398895257693,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.726751391571718,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.726751391571718,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7257489758592053,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 33.046657986111114,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 33.04676649305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-150-frame-18.png",
                "sha256": "d788cc2bd7b2834a175be1f69669c14559274763677ff18242f2e083bf1cc6a3",
                "alphaMass": 70876
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-150-frame-132.png",
                "sha256": "2f9aed12d4865d057b8185f8afc8f28fd9e500221200e23e942690c0cb240d70",
                "alphaMass": 70279
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-150-frame-149.png",
                "sha256": "2f9aed12d4865d057b8185f8afc8f28fd9e500221200e23e942690c0cb240d70",
                "alphaMass": 70279
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 33.046657986111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-900-frame-19.png",
                "sha256": "024d622167ed0b0fa1b308c36ae451cf0d1127e527c47a817173e65c5a66c24a",
                "alphaMass": 70876
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-900-frame-132.png",
                "sha256": "2f9aed12d4865d057b8185f8afc8f28fd9e500221200e23e942690c0cb240d70",
                "alphaMass": 70279
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-900-frame-792.png",
                "sha256": "2f9aed12d4865d057b8185f8afc8f28fd9e500221200e23e942690c0cb240d70",
                "alphaMass": 70279
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/16x9-duration-900-frame-899.png",
                "sha256": "2f9aed12d4865d057b8185f8afc8f28fd9e500221200e23e942690c0cb240d70",
                "alphaMass": 70279
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 31.645182291666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-150-frame-18.png",
                "sha256": "91d095c842e06ca8ae46e493241fc626552f053815d71cf8801a69329d300c58",
                "alphaMass": 151197
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-150-frame-132.png",
                "sha256": "5166e7a6251e5bb41308b06b49ac369b8fab296c85619c472df194fc445e89d2",
                "alphaMass": 153033
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-150-frame-149.png",
                "sha256": "5166e7a6251e5bb41308b06b49ac369b8fab296c85619c472df194fc445e89d2",
                "alphaMass": 153033
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 31.645182291666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-900-frame-19.png",
                "sha256": "99efc855f3b8bc0c62d2423f2fa07ab7fa79c434f18a90c65e52b88013e2fa46",
                "alphaMass": 151197
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-900-frame-132.png",
                "sha256": "5166e7a6251e5bb41308b06b49ac369b8fab296c85619c472df194fc445e89d2",
                "alphaMass": 153033
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-900-frame-792.png",
                "sha256": "5166e7a6251e5bb41308b06b49ac369b8fab296c85619c472df194fc445e89d2",
                "alphaMass": 153033
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/9x16-duration-900-frame-899.png",
                "sha256": "5166e7a6251e5bb41308b06b49ac369b8fab296c85619c472df194fc445e89d2",
                "alphaMass": 153033
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 29.588216145833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-150-frame-18.png",
                "sha256": "7e22f62cd452f01e92bb877bfd81229d140b858c296f8d9ef17e10ddc7beed58",
                "alphaMass": 71512
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-150-frame-132.png",
                "sha256": "c70d9e3a604655a59afb06aaa66296d6d7338cfd0fda71e7de7254e06d4177a4",
                "alphaMass": 70900
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-150-frame-149.png",
                "sha256": "c70d9e3a604655a59afb06aaa66296d6d7338cfd0fda71e7de7254e06d4177a4",
                "alphaMass": 70900
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 29.587999131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-900-frame-19.png",
                "sha256": "f5972836501c4afa2045689c92f2a0a9a5973d2a2aec867a4497bb2d39fb0899",
                "alphaMass": 71512
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-900-frame-132.png",
                "sha256": "c70d9e3a604655a59afb06aaa66296d6d7338cfd0fda71e7de7254e06d4177a4",
                "alphaMass": 70900
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-900-frame-792.png",
                "sha256": "c70d9e3a604655a59afb06aaa66296d6d7338cfd0fda71e7de7254e06d4177a4",
                "alphaMass": 70900
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-ex-partner-braid/1x1-duration-900-frame-899.png",
                "sha256": "c70d9e3a604655a59afb06aaa66296d6d7338cfd0fda71e7de7254e06d4177a4",
                "alphaMass": 70900
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
        "note": "Two partner lockups are braided by a brand-blue dashed line and a gray line into one shared direction."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "889dbc26f74436c6b9363d924bd7c59e533bc42b41a4a345da46999d994ad580",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "96a0ad166dc4a8017979f90c637096f06188822efeba0621c3f7e6ac3f9f1d12",
        "loop": "ed6c0dd4baacb4f3d906154b89fd3fd3ced285e43d75b674c5883c90a74e8125",
        "detail": "cf9349385ec3373d0902ad2b0d6c7213d029b416a3291de48440be7501ae59e0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "771a73ac4224d31c55f24026acb3244f27b5a32155150ba620fbe20ddb86e616",
        "loop": "68bfcc9affe1a25e8d1732f6e7cb3d90ad3cfb9f3c3e48d48e47eac8bcc429df",
        "detail": "3ff796aea1c22dcf6a25c47eadcbad305e3d673cf7545bef348b1aba0495dcbb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-partner-braid/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2a1a4c95cd91b0ee1c511cb20ca22e38fdaf395700909b91ddbdc62cac945031",
        "loop": "1e579f4c36c955cbd9b774099045cc28f57e390f37fc957119b708a5249492b0",
        "detail": "f50d5bbd904bbdf06250b9155a0f1f79466dca13cf1dd0190b259aed7a226625"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/889dbc26f74436c6b9363d924bd7c59e533bc42b41a4a345da46999d994ad580/index.mjs",
    "sha256": "889dbc26f74436c6b9363d924bd7c59e533bc42b41a4a345da46999d994ad580",
    "bytes": 298404,
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
    "at": "2026-10-09T03:25:30.529Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
