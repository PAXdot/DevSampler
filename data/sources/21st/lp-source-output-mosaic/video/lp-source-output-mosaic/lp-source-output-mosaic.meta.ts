// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "workflow",
  "job": "process",
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
    "source-output-mosaic",
    "systems",
    "workflow",
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
    "title": "One source, more possibilities",
    "subtitle": "Context becomes a coordinated set of outputs",
    "items": [
      "Brief",
      "Report",
      "Slides",
      "Visual"
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
  "name": "Source to Output Mosaic",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-source-output-mosaic",
    "bundleSha256": "0880f477e39daf98f3994997a178d2b88c24f292c4856f910c9f912788b46a28",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:33.494Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-paper.png",
        "sha256": "d1523d814431f62ec7ac625fcf4fbb7d6de4d8371ba6356869dbfe096e002904"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-night.png",
        "sha256": "057cff6f69ee0ce6cf1b5ba516adea5306df70fdbb1bd3850d64ec1d6b0f2ae1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-color.png",
        "sha256": "30351f0bd0ac8d9420afbe1e1c2d93da6ffab699c33cf9075023581717e6ca8e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-paper.png",
        "sha256": "4220c11919a2621ee7a4d5e6633238af9dba3a117b55f1c9ed28d09265576dd5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-night.png",
        "sha256": "59d4079d98f7a6f2b7616ad44adfd4e17cadb76e43d413578a050230e0ece332"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-color.png",
        "sha256": "ef20cbd6f9aa65c6da2624f2eb23b88532e8065a628ff9bba7052ff066dfe0aa"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-paper.png",
        "sha256": "e917632b4220eef146e35ba646ca264cb72d873608ea09b4b163c5d9f2d8c97f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-night.png",
        "sha256": "c38fecbab2889fce28022a5149afa525749b130f2cebc234edcab63bc9b69c06"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-color.png",
        "sha256": "f926e591d20a5a07270803b8982889ebc560055bc32c8a769527c1ce3a4648a4"
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
          "lp-source-output-mosaic--16x9",
          "lp-source-output-mosaic--9x16",
          "lp-source-output-mosaic--1x1"
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
            "paperNight": 110.51915147569444,
            "paperColor": 9.110649956597221,
            "region": {
              "left": 207,
              "top": 126,
              "width": 1459,
              "height": 826
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 142.13614908854166,
            "paperColor": 11.114881727430555,
            "region": {
              "left": 108,
              "top": 192,
              "width": 863,
              "height": 1468
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 115.39236111111111,
            "paperColor": 10.1162109375,
            "region": {
              "left": 112,
              "top": 305,
              "width": 828,
              "height": 468
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
            "occupancy": 0.8236672208749757,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8236672208749757,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8226700450627784,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8658712005892893,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8658712005892893,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8658712005892893,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47083648274124473,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47083648274124473,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4698304218806865,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 96.76030815972223,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 96.91417100694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-150-frame-18.png",
                "sha256": "8201ec989da12ab6420dbc7044fea910f4d7fb0acaa7ca03e476ece61384977f",
                "alphaMass": 1238
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-150-frame-132.png",
                "sha256": "a11bda98683989e1d356eb7aa77fd74272c696ecdb838ce0f7b4f9f3ead6113e",
                "alphaMass": 220432
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-150-frame-149.png",
                "sha256": "a11bda98683989e1d356eb7aa77fd74272c696ecdb838ce0f7b4f9f3ead6113e",
                "alphaMass": 220432
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 96.76030815972223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-900-frame-19.png",
                "sha256": "b1d27e7a31a40428802c970c6925876c306a023cb22fb732ec78c2904a81f874",
                "alphaMass": 1649
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-900-frame-132.png",
                "sha256": "a11bda98683989e1d356eb7aa77fd74272c696ecdb838ce0f7b4f9f3ead6113e",
                "alphaMass": 220432
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-900-frame-792.png",
                "sha256": "a11bda98683989e1d356eb7aa77fd74272c696ecdb838ce0f7b4f9f3ead6113e",
                "alphaMass": 220432
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/16x9-duration-900-frame-899.png",
                "sha256": "a11bda98683989e1d356eb7aa77fd74272c696ecdb838ce0f7b4f9f3ead6113e",
                "alphaMass": 220432
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 140.95030381944446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-150-frame-18.png",
                "sha256": "d553e8ccff9421df9671c9be030a132ac6e851faf1ef325d967f874b172636d0",
                "alphaMass": 529
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-150-frame-132.png",
                "sha256": "8b106dd8f5de7433d1f9544e082ffd8d1e21c3af7d4c418612208bbd7803a6ba",
                "alphaMass": 307888
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-150-frame-149.png",
                "sha256": "8b106dd8f5de7433d1f9544e082ffd8d1e21c3af7d4c418612208bbd7803a6ba",
                "alphaMass": 307888
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 140.724609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-900-frame-19.png",
                "sha256": "51fff0fdaad303900952adcf3bbfd29bfc124d25ad594dd24eb52bbd38bb2dff",
                "alphaMass": 768
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-900-frame-132.png",
                "sha256": "8b106dd8f5de7433d1f9544e082ffd8d1e21c3af7d4c418612208bbd7803a6ba",
                "alphaMass": 307888
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-900-frame-792.png",
                "sha256": "8b106dd8f5de7433d1f9544e082ffd8d1e21c3af7d4c418612208bbd7803a6ba",
                "alphaMass": 307888
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/9x16-duration-900-frame-899.png",
                "sha256": "8b106dd8f5de7433d1f9544e082ffd8d1e21c3af7d4c418612208bbd7803a6ba",
                "alphaMass": 307888
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 58.354275173611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-150-frame-18.png",
                "sha256": "26fa1f9f299af97fe50f3bee9d111843302be01e6b2aa655bd69b36a073b86de",
                "alphaMass": 1352
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-150-frame-132.png",
                "sha256": "fd39878373b8e545a112cbe0f88db150b07db09ed25bb45eb11f840a94c4d0da",
                "alphaMass": 125471
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-150-frame-149.png",
                "sha256": "fd39878373b8e545a112cbe0f88db150b07db09ed25bb45eb11f840a94c4d0da",
                "alphaMass": 125471
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 58.180881076388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-900-frame-19.png",
                "sha256": "26952795311698962461e10208ca1dff2541056aeabd9b529758317717b64f16",
                "alphaMass": 1585
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-900-frame-132.png",
                "sha256": "fd39878373b8e545a112cbe0f88db150b07db09ed25bb45eb11f840a94c4d0da",
                "alphaMass": 125471
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-900-frame-792.png",
                "sha256": "fd39878373b8e545a112cbe0f88db150b07db09ed25bb45eb11f840a94c4d0da",
                "alphaMass": 125471
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-source-output-mosaic/1x1-duration-900-frame-899.png",
                "sha256": "fd39878373b8e545a112cbe0f88db150b07db09ed25bb45eb11f840a94c4d0da",
                "alphaMass": 125471
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "One source fans into a mosaic of brief, report, slides and visual outputs with light blue highlights."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0880f477e39daf98f3994997a178d2b88c24f292c4856f910c9f912788b46a28",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2e3d37bfb23c766d90c382a97865dc9d334e2edfc564290b353a7c898cc1139c",
        "loop": "409dcdddbf86eb8867366cb9835f526bee8584801a8fe34ac824a2a7e2f13a64",
        "detail": "40817ad1770c74bfa9e4db24b45e7cd619a0c0295968ae581c4db0fcdf54469b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cfd04afa146b87da05739790be56bb7980655984a0a52ad93df7ca0298fb8754",
        "loop": "9596228770fd4194cc719a66a411a8feac3916ad33c304de415ed29d5a209d50",
        "detail": "2a5089ba0753ebb4182a559c101246fac8e9522d7e7a3805e5ccfcae0614c315"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-source-output-mosaic/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e28255a65bd7b5958db5e13c98c6b4727599cd5942ac8ad3702b94d568a491e7",
        "loop": "4e1005dc026c45c811cf1d8bc7f5df12b4a50d1689953d7ab2785f0aca33cf1c",
        "detail": "0b7808d7fc7028e6b88426ed88b8c3229ef1deac37dc71accd358b594ee40eed"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0880f477e39daf98f3994997a178d2b88c24f292c4856f910c9f912788b46a28/index.mjs",
    "sha256": "0880f477e39daf98f3994997a178d2b88c24f292c4856f910c9f912788b46a28",
    "bytes": 298424,
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
    "at": "2026-10-09T03:34:38.594Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
