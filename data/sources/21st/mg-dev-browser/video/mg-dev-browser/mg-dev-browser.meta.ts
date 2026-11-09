// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "url-type-page-load"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "url-type-page-load",
    "browser",
    "website",
    "page-load"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 64,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "url-type-page-load",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#1B1C1F",
    "accent": "#3D63FF",
    "secondary": "#FF7A59",
    "paper": "#EFF1F5",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "lumen.app/launch",
    "headline": "One link and the whole team is in",
    "caption": "Boards, docs and launch metrics load in seconds"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 64,
      "role": "caption"
    }
  ],
  "name": "Browser URL Load",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-browser",
    "bundleSha256": "3f2cadc650506c432ecc3ab4b7c2475dd0acfade21be4b302c8701af74d47794",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:41.752Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-paper.png",
        "sha256": "82ff1005687596d5277b59d3bb8526bd8a2d9b6d5cc9b378b00799ebc7fc1235"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-night.png",
        "sha256": "b5405d6607041cae7e7d42f307e8c58c1357f7641fa26bfdb04d1c609995d382"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-color.png",
        "sha256": "cd3f1f5a68ef87d51adfaa9fa105348507c57514415ac94c4c086687dd7a88a5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-paper.png",
        "sha256": "fcc14b18511c258748ecaab6e03f5f3b43cc313dcca4ba191c95b7e0de73f648"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-night.png",
        "sha256": "00758a35aef4ec6cce51bb19c8e367aefd8445b737a6bf38693f868a4d4f257f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-color.png",
        "sha256": "3f2a44545c8e537d5572298752d4a3ffb6ac65a1310d21b4c7b6ff70ae47a424"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-paper.png",
        "sha256": "41a73a42b10ea97fe973412d8cafe0de3922d351323ea5471c07f95cb4554c2a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-night.png",
        "sha256": "b1c783d4a6723459dae4b0177c0c0caea5514a9a5097ced3fdb000499f54145f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-color.png",
        "sha256": "8951c41ede8376a031ab754427f7cadcf8ef95e23e32a8c88503e4f0a53dbbb4"
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
          "mg-dev-browser--16x9",
          "mg-dev-browser--9x16",
          "mg-dev-browser--1x1"
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
            "paperNight": 16.87472873263889,
            "paperColor": 7.853814019097222,
            "region": {
              "left": 103,
              "top": 195,
              "width": 1768,
              "height": 738
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.57158745659722,
            "paperColor": 10.357340494791666,
            "region": {
              "left": 16,
              "top": 164,
              "width": 1048,
              "height": 1595
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 17.826253255208332,
            "paperColor": 6.853569878472222,
            "region": {
              "left": 55,
              "top": 71,
              "width": 971,
              "height": 939
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
            "occupancy": 0.8917745338876293,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8917745338876293,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8917745338876293,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1424531875507407,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.140304372777918,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1388718295960363,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1078443294327336,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1078443294327336,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1066645165153397,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.573784722222222,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.701605902777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-90-frame-10.png",
                "sha256": "d48ce004534a642a762bbfffce63afd414040cd369ec09ca2040abb7cfcccc5e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-90-frame-89.png",
                "sha256": "ccd6aec776f39d68c8b05a2337ceaf1cb09e65551f515c8d388fa4da1fe38caf",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-90-frame-79.png",
                "sha256": "ccd6aec776f39d68c8b05a2337ceaf1cb09e65551f515c8d388fa4da1fe38caf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.573784722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-900-frame-16.png",
                "sha256": "61ec3215e5b19b358d83cb4711928c1f805b6b6608d62a38d901794f20bc245e",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-900-frame-108.png",
                "sha256": "ccd6aec776f39d68c8b05a2337ceaf1cb09e65551f515c8d388fa4da1fe38caf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-900-frame-792.png",
                "sha256": "ccd6aec776f39d68c8b05a2337ceaf1cb09e65551f515c8d388fa4da1fe38caf",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/16x9-duration-900-frame-899.png",
                "sha256": "7d06eac6dd4a7ccaa88bb4fb696e51e182f5dde9db488f7c399937826aad4d0b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.288953993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-90-frame-10.png",
                "sha256": "ab4d59147dbc5a41146fbb341550150abbea0b61be7cddca69fd73457a03d4d2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-90-frame-89.png",
                "sha256": "fa0867936ba58c8d60aa80a1b0448fd4ab537d5727e308ea666d9927275000d3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-90-frame-79.png",
                "sha256": "fa0867936ba58c8d60aa80a1b0448fd4ab537d5727e308ea666d9927275000d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.136610243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-900-frame-16.png",
                "sha256": "decd9295cf6abfd8056f558cb8ef3eb64bf53276f48709d06474845f2ff20d27",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-900-frame-108.png",
                "sha256": "fa0867936ba58c8d60aa80a1b0448fd4ab537d5727e308ea666d9927275000d3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-900-frame-792.png",
                "sha256": "fa0867936ba58c8d60aa80a1b0448fd4ab537d5727e308ea666d9927275000d3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/9x16-duration-900-frame-899.png",
                "sha256": "fa0867936ba58c8d60aa80a1b0448fd4ab537d5727e308ea666d9927275000d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.647894965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-90-frame-10.png",
                "sha256": "55096070cebd632e47a5c71189f8e9c65b38a17384d21236bfde78b90604b5bf",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-90-frame-89.png",
                "sha256": "713c7d131bdb9ca61ccc7bb360530e596c4f44cfc848593b886e47463639feb2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-90-frame-79.png",
                "sha256": "713c7d131bdb9ca61ccc7bb360530e596c4f44cfc848593b886e47463639feb2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.484917534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-900-frame-16.png",
                "sha256": "286e502d3de65042e57e7ad1fce7fc3a847c9167c0ce484ba3ce6be404d9db16",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-900-frame-108.png",
                "sha256": "713c7d131bdb9ca61ccc7bb360530e596c4f44cfc848593b886e47463639feb2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-900-frame-792.png",
                "sha256": "713c7d131bdb9ca61ccc7bb360530e596c4f44cfc848593b886e47463639feb2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-dev-browser/1x1-duration-900-frame-899.png",
                "sha256": "713c7d131bdb9ca61ccc7bb360530e596c4f44cfc848593b886e47463639feb2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A browser loads a launch hub URL beside a headline on a pale backdrop with coral and light-blue glows."
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
      "bundleSha256": "3f2cadc650506c432ecc3ab4b7c2475dd0acfade21be4b302c8701af74d47794",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-browser/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-browser/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-browser/16x9/detail.mp4",
      "bg": "#f1dddb",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "28d034121cbd97fc56e6d8febe77b5ae5066880c9d0016b0ac631148be5a09aa",
        "loop": "011fbf0d28aa7b0918ab7603edc1425f3a03d3cbcd1aa31ec342bf9edbcc96c4",
        "detail": "031cbe1621e5a6d366b4b7914de5f58c36b2e1faa10abdd091662c074b1c95f8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-browser/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-browser/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-browser/9x16/detail.mp4",
      "bg": "#f1dddb",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a78598db9bd4d468847258fcac84d7a17596042526e299ac825eb8d70515f777",
        "loop": "b4bf49dde8615e12c3968b127a41959fa1c5894cd96afaefae9499460624dda1",
        "detail": "dcaf3da88d31ea5170bb168727f2f6471f0721227be5d84bd077b351490d0b40"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-browser/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-browser/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-browser/1x1/detail.mp4",
      "bg": "#f1dddb",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "20019ae02f99d2b82f6fdd5668da1f4c1337fc1ec31b8f036be4a11d3444fe73",
        "loop": "873fce11cee321adc5d21afb1b57261f60ef7f3d33e3ce746e04209f31ad7d71",
        "detail": "c0b4f5c1f18506974375947297f510ae095ae88c1b185a9a72f34b8677559307"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3f2cadc650506c432ecc3ab4b7c2475dd0acfade21be4b302c8701af74d47794/index.mjs",
    "sha256": "3f2cadc650506c432ecc3ab4b7c2475dd0acfade21be4b302c8701af74d47794",
    "bytes": 182329,
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
    "at": "2026-10-09T03:48:28.104Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
