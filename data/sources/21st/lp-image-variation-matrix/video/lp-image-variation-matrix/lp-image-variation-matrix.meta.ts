// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data-output",
  "job": "gallery",
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
    "image-variation-matrix",
    "systems",
    "data",
    "source-linked"
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
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "media"
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
    "title": "Explore a wider direction",
    "subtitle": "One visual language becomes a set of options",
    "items": [
      "Warm",
      "Calm",
      "Bright",
      "Bold"
    ],
    "screenshot": "",
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
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Image Variation Matrix",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-image-variation-matrix",
    "bundleSha256": "ef438e66a446ce7464c42492c04fcc6b6fe61420dd5eaa5864a5ef00f293fa22",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:34.281Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-paper.png",
        "sha256": "0cd4eb2151bb2497e3284674497a40518cd994fc1d01df91334e5bba40264e63"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-night.png",
        "sha256": "73e228274d11553133a52653ae36bc03368c739bd05a8d2c80d45c3387bbfc07"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-color.png",
        "sha256": "ef0fd680256bb79e6942d23c62c1028af52eab5f9e7cfccf523d216572ede356"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-paper.png",
        "sha256": "0ae8a6d8cbf02ff4335bfcd47e87e7b5ce9258683191f2a724a339bd07ddd8c7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-night.png",
        "sha256": "4e57a4101a9a286ba99f76a0d18212034910ceda0a71a91cdfbe451082036f74"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-color.png",
        "sha256": "b5e13eb8c6ad45b99ebae7bdc73a42efcdc4ecc71e079b18388b3a736e18977c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-paper.png",
        "sha256": "0ee0a22ab3b0194ca7001449143f5129a961ba134880a36c05f5f8d5531b52eb"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-night.png",
        "sha256": "70a9e6a33157476ee2429705b9526fa9b7b59ef2255e3b2054c5e5618c0375ed"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-color.png",
        "sha256": "ed1e07338475f0812838e139952c2c9622911a662e32b4f1d9e1611ffdeb9200"
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
          "lp-image-variation-matrix--16x9",
          "lp-image-variation-matrix--9x16",
          "lp-image-variation-matrix--1x1"
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
            "paperNight": 131.55919053819446,
            "paperColor": 13.065185546875,
            "region": {
              "left": 193,
              "top": 126,
              "width": 1535,
              "height": 793
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 129.34421115451389,
            "paperColor": 14.060601128472221,
            "region": {
              "left": 108,
              "top": 202,
              "width": 863,
              "height": 1454
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 126.64512803819444,
            "paperColor": 13.75802951388889,
            "region": {
              "left": 108,
              "top": 118,
              "width": 863,
              "height": 809
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
            "occupancy": 0.8319515032736348,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8319515032736348,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8319515032736348,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8576135733357131,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8576135733357131,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8576135733357131,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.848307358494381,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.848307358494381,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.848307358494381,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 112.70301649305556,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 112.70301649305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-150-frame-18.png",
                "sha256": "2b2c621161ecad54e47902462f5f45f5734d1f1f479e3159ca40ce586950b4a6",
                "alphaMass": 77743
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-150-frame-132.png",
                "sha256": "ca826969df49bbf4f2e207cf3214ae06b194822835aa9b8ec267b16e40c9db7c",
                "alphaMass": 307520
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-150-frame-149.png",
                "sha256": "ca826969df49bbf4f2e207cf3214ae06b194822835aa9b8ec267b16e40c9db7c",
                "alphaMass": 307520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 112.70301649305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-900-frame-19.png",
                "sha256": "2b2c621161ecad54e47902462f5f45f5734d1f1f479e3159ca40ce586950b4a6",
                "alphaMass": 77743
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-900-frame-132.png",
                "sha256": "ca826969df49bbf4f2e207cf3214ae06b194822835aa9b8ec267b16e40c9db7c",
                "alphaMass": 307520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-900-frame-792.png",
                "sha256": "ca826969df49bbf4f2e207cf3214ae06b194822835aa9b8ec267b16e40c9db7c",
                "alphaMass": 307520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/16x9-duration-900-frame-899.png",
                "sha256": "ca826969df49bbf4f2e207cf3214ae06b194822835aa9b8ec267b16e40c9db7c",
                "alphaMass": 307520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 123.08962673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-150-frame-18.png",
                "sha256": "1c9033fd678b2eee15d28a66e061d58175447e1efaf29631969bfcc471d866a0",
                "alphaMass": 83016
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-150-frame-132.png",
                "sha256": "b43209e408455828bf360881bf5a7592caafe06935a52eaa1fbe88fb5b8cb94c",
                "alphaMass": 331094
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-150-frame-149.png",
                "sha256": "b43209e408455828bf360881bf5a7592caafe06935a52eaa1fbe88fb5b8cb94c",
                "alphaMass": 331094
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 123.08962673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-900-frame-19.png",
                "sha256": "1c9033fd678b2eee15d28a66e061d58175447e1efaf29631969bfcc471d866a0",
                "alphaMass": 83016
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-900-frame-132.png",
                "sha256": "b43209e408455828bf360881bf5a7592caafe06935a52eaa1fbe88fb5b8cb94c",
                "alphaMass": 331094
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-900-frame-792.png",
                "sha256": "b43209e408455828bf360881bf5a7592caafe06935a52eaa1fbe88fb5b8cb94c",
                "alphaMass": 331094
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/9x16-duration-900-frame-899.png",
                "sha256": "b43209e408455828bf360881bf5a7592caafe06935a52eaa1fbe88fb5b8cb94c",
                "alphaMass": 331094
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 122.55164930555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-150-frame-18.png",
                "sha256": "910c53c124f0f0d39316883491d92dac165306edf161e849c5448a019af8e9e7",
                "alphaMass": 80932
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-150-frame-132.png",
                "sha256": "27564ba709c9cf1512f6e41c55f4f30b06621675bf8d30ba4829723d13fcad1d",
                "alphaMass": 322529
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-150-frame-149.png",
                "sha256": "27564ba709c9cf1512f6e41c55f4f30b06621675bf8d30ba4829723d13fcad1d",
                "alphaMass": 322529
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 122.55164930555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-900-frame-19.png",
                "sha256": "910c53c124f0f0d39316883491d92dac165306edf161e849c5448a019af8e9e7",
                "alphaMass": 80932
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-900-frame-132.png",
                "sha256": "27564ba709c9cf1512f6e41c55f4f30b06621675bf8d30ba4829723d13fcad1d",
                "alphaMass": 322529
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-900-frame-792.png",
                "sha256": "27564ba709c9cf1512f6e41c55f4f30b06621675bf8d30ba4829723d13fcad1d",
                "alphaMass": 322529
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-image-variation-matrix/1x1-duration-900-frame-899.png",
                "sha256": "27564ba709c9cf1512f6e41c55f4f30b06621675bf8d30ba4829723d13fcad1d",
                "alphaMass": 322529
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
        "note": "One image becomes a matrix of four tonal variations on light brand-blue tiles."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ef438e66a446ce7464c42492c04fcc6b6fe61420dd5eaa5864a5ef00f293fa22",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "beadfe11cc44586efa19b476e110842b2a665cffb2a4ae7e16aa76e7c9b2256b",
        "loop": "93ee6448d20cc3c23d35ac88b3bf906407df6663dbf57219fefc151a0f441738",
        "detail": "510c4bd27a828b03606c0d322ce8747052964ec59b7601e8e23c5ee1a9c5f8e1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "984708201e2bc8ef30c645a97149595023e8cb6234a3f9aa9f813482708e5821",
        "loop": "edd6e392b433ad42a2ea758607f3e8f2ef0b87653a3ac8ac03586547239beebb",
        "detail": "5cac22a1281d11bafa9778708f6e0c118cb2a87380a5b726421b9868c457acef"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-image-variation-matrix/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "11e8fd22b3e6c0a7a11e29989b72663d1b6fecf078f53bc19de15cb392744fba",
        "loop": "df46e7269563fe70fe4b203f56dfb7f3966253598ee7c70e4af75ed6701764db",
        "detail": "bcf7409df74b4cfbadeec5bd5d10cf3b6b01c8c413ed21fa4f2dadd92e6dbdce"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ef438e66a446ce7464c42492c04fcc6b6fe61420dd5eaa5864a5ef00f293fa22/index.mjs",
    "sha256": "ef438e66a446ce7464c42492c04fcc6b6fe61420dd5eaa5864a5ef00f293fa22",
    "bytes": 298434,
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
    "at": "2026-10-09T03:27:24.407Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
