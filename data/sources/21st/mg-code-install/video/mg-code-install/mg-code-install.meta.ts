// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/motion-gallery",
  "job": "code",
  "language": "glass",
  "mechanic": [
    "npx-install-component-comes-alive"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "code",
    "npx-install-component-comes-alive",
    "install",
    "terminal",
    "component"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "key": "command",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "file",
      "type": "text",
      "maxChars": 28,
      "role": "caption"
    },
    {
      "key": "metric",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 9,
      "role": "value"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "npx-install-component-comes-alive",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#ECEDF2",
    "accent": "#3D63FF",
    "secondary": "#7E7F83",
    "paper": "#0F1013",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "command": "npx lumen add chart",
    "file": "components/ui/chart.tsx",
    "metric": "Revenue",
    "value": "$48,290"
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
      "brand": "fonts.heading"
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
      "key": "command",
      "label": "Command",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "file",
      "label": "File",
      "type": "text",
      "max": 28,
      "role": "caption"
    },
    {
      "key": "metric",
      "label": "Metric",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 9,
      "role": "value"
    }
  ],
  "name": "One Command Install",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-code-install",
    "bundleSha256": "501cb6b13135b1a0df881d6080eb94791236773bb0c304123fde0a48d1c80957",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:48.565Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-paper.png",
        "sha256": "d0e5ed46a68017a454949c7feaa3cf80eec4e4ab88390cf4ff38ff928aa2d78e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-night.png",
        "sha256": "c2d46dbee71265d1eb20a296b246fdf71810cfa80e0957543f75cc105a413e76"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-color.png",
        "sha256": "d126e3795fbd34b0efe2720c7b1498a235b050e0271722450acb9e3d75393c97"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-paper.png",
        "sha256": "7b56114394c746f1eaea3c6ccd388bb8f7fa46287db3675413ee344b9f8b6616"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-night.png",
        "sha256": "7ff9318792ea71d65708a817f6e6f75d27ae46553316c7f8bd33dfe046ebf541"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-color.png",
        "sha256": "5426bb6aac976551fbe1cba2603cdb91f15372171e06a90f89da8c9319647d85"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-paper.png",
        "sha256": "a9c8c6d15f5422cbb3bb571bb5319e2e58e9c50a585b579f413dcbd14433ed10"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-night.png",
        "sha256": "05c26a46fe3db46aa09092dc9101b2f604d2292d2f85876298dc1a2a3028e16b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-color.png",
        "sha256": "d4e1b9487032494494550eacbcd50a4580347bfcede5863040f1beedf15b35ca"
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
          "mg-code-install--16x9",
          "mg-code-install--9x16",
          "mg-code-install--1x1"
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
            "paperNight": 38.77642144097222,
            "paperColor": 5.424940321180555,
            "region": {
              "left": 26,
              "top": 115,
              "width": 1894,
              "height": 932
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 44.287136501736114,
            "paperColor": 8.11477322048611,
            "region": {
              "left": 0,
              "top": 79,
              "width": 1080,
              "height": 1688
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.15117730034722,
            "paperColor": 7.521837022569445,
            "region": {
              "left": 24,
              "top": 81,
              "width": 1032,
              "height": 999
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
            "occupancy": 1.206458342081689,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.206458342081689,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.206458342081689,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.252676996724616,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.252676996724616,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.252676996724616,
            "bad": [],
            "measured": 19
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 51.262369791666664,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 51.289388020833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-90-frame-10.png",
                "sha256": "b5ad31eb6c5f87ce6e957b9da480eb2aaa7bed50a123683ed7e7569a45b65352",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-90-frame-89.png",
                "sha256": "4ce25c92098edc5ee8841ae4e558ef1fa30bd16dcac1ce3575cf00300950b9e2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-90-frame-79.png",
                "sha256": "4ce25c92098edc5ee8841ae4e558ef1fa30bd16dcac1ce3575cf00300950b9e2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 51.262369791666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-900-frame-15.png",
                "sha256": "ba2f8369d0a439e6ed67e5e0191ebc7371aa188b4b64da9d5de9815d9373306a",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-900-frame-102.png",
                "sha256": "4ce25c92098edc5ee8841ae4e558ef1fa30bd16dcac1ce3575cf00300950b9e2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-900-frame-792.png",
                "sha256": "4ce25c92098edc5ee8841ae4e558ef1fa30bd16dcac1ce3575cf00300950b9e2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/16x9-duration-900-frame-899.png",
                "sha256": "4ce25c92098edc5ee8841ae4e558ef1fa30bd16dcac1ce3575cf00300950b9e2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 55.3994140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-90-frame-10.png",
                "sha256": "3655a3cd86ff340bf1f6c87bd89e81813006f75b096fc301457aeec8241ad98d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-90-frame-89.png",
                "sha256": "cae74f444d26078295a56302f8c5f1fd14f60d394d921b24712fb5b50c810be6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-90-frame-79.png",
                "sha256": "cae74f444d26078295a56302f8c5f1fd14f60d394d921b24712fb5b50c810be6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 55.356662326388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-900-frame-15.png",
                "sha256": "2ec069e6bf6aec3a772e65fd69d09ee1fcf1e9b1f79cce673815dc556a4c9f1b",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-900-frame-102.png",
                "sha256": "cae74f444d26078295a56302f8c5f1fd14f60d394d921b24712fb5b50c810be6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-900-frame-792.png",
                "sha256": "cae74f444d26078295a56302f8c5f1fd14f60d394d921b24712fb5b50c810be6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/9x16-duration-900-frame-899.png",
                "sha256": "cae74f444d26078295a56302f8c5f1fd14f60d394d921b24712fb5b50c810be6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 56.04090711805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-90-frame-10.png",
                "sha256": "901a78bbd680213dca8072ed0d420df9356c794b36ad8fa6fcf1d7a3d05698ab",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-90-frame-89.png",
                "sha256": "5966a2a19f24cab74bdd74341204d2285ff1453c3bbe9ae74b887ac8b1d966b2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-90-frame-79.png",
                "sha256": "5966a2a19f24cab74bdd74341204d2285ff1453c3bbe9ae74b887ac8b1d966b2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 56.022135416666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-900-frame-15.png",
                "sha256": "a059439b41c8e66cea971f15b2644f39876ebba365b4c560345e11b090293117",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-900-frame-102.png",
                "sha256": "5966a2a19f24cab74bdd74341204d2285ff1453c3bbe9ae74b887ac8b1d966b2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-900-frame-792.png",
                "sha256": "5966a2a19f24cab74bdd74341204d2285ff1453c3bbe9ae74b887ac8b1d966b2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-code-install/1x1-duration-900-frame-899.png",
                "sha256": "5966a2a19f24cab74bdd74341204d2285ff1453c3bbe9ae74b887ac8b1d966b2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "One install command adds a chart component that appears live; glows are brand blue, cyan and graphite, no pink or purple."
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
      "bundleSha256": "501cb6b13135b1a0df881d6080eb94791236773bb0c304123fde0a48d1c80957",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-install/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-install/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-install/16x9/detail.mp4",
      "bg": "#1b1b1e",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2ba4e7f585b64b19a3fcb3ac8753e0e5f9dd72d2ab991b14453c176e116c2cd0",
        "loop": "63ed1b9148ee4c0627af5e52b0003dcac557d67656dfaba47b5284661d0bbae3",
        "detail": "fc642fceda563033ee1653daca7cb33971816018fb963fd04217bb6c60b762fd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-install/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-install/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-install/9x16/detail.mp4",
      "bg": "#141518",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "73eaf31a5d48726e8ca20cb0950d27c2193dba91c7415c23642ada83d6a1aebd",
        "loop": "22be76a8c8018d96af14e4f31f862c58ddc4b893946356993e2cd671514d2fea",
        "detail": "c8c374b28b487bcbef7d931075e4a63d10d145492e6c25fc525573ed67314c74"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-install/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-install/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-install/1x1/detail.mp4",
      "bg": "#1b1b1e",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "270f2f362e9ed5f6da37886ed1abd02f7ae37bda88ec8c62c15032286fb1f744",
        "loop": "988de743efbb4b83c4d5e0986ea208769c9e0c578481f781606aa1d0c1d4ec3d",
        "detail": "6c3f489702cdfb0f885d91ed6a98399fd8219b5784ba789455f2eb128d8f1ff7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/501cb6b13135b1a0df881d6080eb94791236773bb0c304123fde0a48d1c80957/index.mjs",
    "sha256": "501cb6b13135b1a0df881d6080eb94791236773bb0c304123fde0a48d1c80957",
    "bytes": 172886,
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
    "at": "2026-10-09T03:50:16.880Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
