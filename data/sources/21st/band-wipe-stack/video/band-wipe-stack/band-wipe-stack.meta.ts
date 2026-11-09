// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/wipe",
  "tags": [
    "transition",
    "wipe",
    "bands",
    "slanted",
    "chapter",
    "numeral",
    "stack"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 22,
      "min": 10,
      "max": 40
    },
    "stretch": "scale",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      6,
      12,
      21
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
      "9:16"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background",
      "nextBackground"
    ]
  },
  "slots": [
    {
      "key": "beforeTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "afterTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "nextLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    }
  ],
  "brand": {
    "previewAccent": "colors.primary",
    "textColor": "colors.text",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "numeralFontFamily": "fonts.numerals",
    "accent": "colors.primary",
    "secondary": "colors.background",
    "background": "colors.background",
    "nextBackground": "colors.background"
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
      "frame": 36
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (TransitionPresentation; motion study of V09, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "kinetic-poster",
  "mechanic": [
    "wipe"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "previewAccent": "#3D63FF",
    "textColor": "#F4F4F5",
    "beforeTitle": "Before",
    "afterTitle": "After",
    "nextLabel": "Next scene",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "numeralFontFamily": "Geist",
    "background": "#0B0B10",
    "nextBackground": "#0B0B10",
    "accent": "#0EA5E9",
    "secondary": "#FFFFFF",
    "bands": 2,
    "angle": 20,
    "numeral": "4",
    "direction": "right"
  },
  "fields": [
    {
      "key": "previewAccent",
      "label": "Preview accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "beforeTitle",
      "label": "Before title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "afterTitle",
      "label": "After title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "nextLabel",
      "label": "Next label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "numeralFontFamily",
      "label": "Numeral font family",
      "type": "font",
      "brand": "fonts.numerals"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "nextBackground",
      "label": "Next background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
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
      "brand": "colors.background"
    },
    {
      "key": "bands",
      "label": "Bands",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 2
    },
    {
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": 0,
      "max": 35
    },
    {
      "key": "numeral",
      "label": "Numeral",
      "type": "text",
      "max": 3
    },
    {
      "key": "direction",
      "label": "Direction",
      "type": "select",
      "options": [
        "right",
        "left",
        "top",
        "bottom"
      ]
    }
  ],
  "name": "Band Wipe Stack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "band-wipe-stack",
    "bundleSha256": "6ccda3963a57fefd753fd883b7d14e4eabfbea27638ff1179e73dab90ee53506",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:09:56.296Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-paper.png",
        "sha256": "dbcba514fc9de25b77f4fbf23669890f024dcc3ae72107e17c916d5481730372"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-night.png",
        "sha256": "fdb42e97e9f494428f021723b7b22d36de02c534271be0c02c9cb98e02d58d5e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-color.png",
        "sha256": "18e6ac7b5ebda5b70caa490bc64ea62e6e7d23806f12e9c2f4f59873e8197859"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-paper.png",
        "sha256": "de983c4760e119542720d1a9a9c42255c6f9fba001b15cc9ac6f8845d3c80919"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-night.png",
        "sha256": "3c1a416b602d8fce0d2c0d4caf41a1f4ecb62400d5646c895e76908899d00836"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-color.png",
        "sha256": "23980bd0105c3aa4ad7292e797d9c4f2cce4dbc047851678e4d94ccc3efecbb0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-paper.png",
        "sha256": "dabcc4fd3e191c7eeead1402566aca265414f666c1ff4ee13ba22e247e79e038"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-night.png",
        "sha256": "5c5502026b10e8f7c34d8f5e037dc604a20a87de197f15830724cf21a57b6f58"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-color.png",
        "sha256": "878764433e6db127354b1cb59c9e60fbf1115aaa59fb5037a505ce5f3324742f"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "band-wipe-stack--16x9",
          "band-wipe-stack--1x1",
          "band-wipe-stack--9x16"
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
            "paperNight": 156.42051866319446,
            "paperColor": 11.636149088541666,
            "region": {
              "left": 77,
              "top": 43,
              "width": 1766,
              "height": 994
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 155.28317599826389,
            "paperColor": 12.202989366319445,
            "region": {
              "left": 43,
              "top": 43,
              "width": 994,
              "height": 994
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 156.48285590277777,
            "paperColor": 11.668701171875,
            "region": {
              "left": 43,
              "top": 77,
              "width": 994,
              "height": 1766
            },
            "canvas": {
              "width": 1080,
              "height": 1920
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
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 80.39973958333333,
        "frames": [
          7,
          36,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 10,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1.0000402728890965,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-10-frame-1.png",
                "sha256": "6cd7dfecb91bf1819f46eab597042ad0e658b5797b370f39e78c676f60b1df9e",
                "alphaMass": 496612
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-10-frame-9.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-10-frame-8.png",
                "sha256": "100152976828c5121b28abe9e350257c77c134558f43145b06c59526c413cbac",
                "alphaMass": 496632
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 40,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-40-frame-4.png",
                "sha256": "80e85eb6a5fee7f7530093fcbfd8a273f4d7c2e2783486d7e4b170a2e75dab19",
                "alphaMass": 496612
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-40-frame-36.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-40-frame-35.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/16x9-duration-40-frame-39.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 10,
            "averageChannelDifference": 9.858506944444445,
            "retainedAlpha": 1.0000442834138485,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-10-frame-1.png",
                "sha256": "abbc5eb5637df5c7f1bba3334d8ccba2b141a37847ac80ecb98dd3bffb0c55d5",
                "alphaMass": 496800
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-10-frame-9.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-10-frame-8.png",
                "sha256": "369b24265b15dd0618de094bb5be3f39294f431603bf3c7773763f62dc5aa587",
                "alphaMass": 496822
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 40,
            "averageChannelDifference": 9.858506944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-40-frame-4.png",
                "sha256": "abbc5eb5637df5c7f1bba3334d8ccba2b141a37847ac80ecb98dd3bffb0c55d5",
                "alphaMass": 496800
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-40-frame-36.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-40-frame-35.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/1x1-duration-40-frame-39.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 10,
            "averageChannelDifference": 5.611653645833333,
            "retainedAlpha": 1.0000362213851057,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-10-frame-1.png",
                "sha256": "7209bbef2426292992c04e6eb179c042c50274cc33ce9f10b0620f89884f0c45",
                "alphaMass": 496944
              },
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-10-frame-9.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              },
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-10-frame-8.png",
                "sha256": "ab8979fe8209873588d145ef83aafe85451a86836fd1e07ed6b675b197a6c209",
                "alphaMass": 496962
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 40,
            "averageChannelDifference": 5.611653645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-40-frame-4.png",
                "sha256": "8e39ebe13b8dad1890d3690431337246b77ca128d5412aff9b17982b183b1b54",
                "alphaMass": 496944
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-40-frame-36.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-40-frame-35.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/band-wipe-stack/9x16-duration-40-frame-39.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Stacked bands wipe across from one scene to the next; transition."
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
      "bundleSha256": "6ccda3963a57fefd753fd883b7d14e4eabfbea27638ff1179e73dab90ee53506",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.000015Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/band-wipe-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/band-wipe-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/band-wipe-stack/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 36,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "1db4611dd22e8b6fee4bca6735d95c90f52473b4caa04e7683def6f1c976dd61",
        "loop": "6e6c7d5c5c55dcb3af5d953a43e67dbb87c2270d60bd7c07bbf27b2ffcf15e63",
        "detail": "89044704860ac273c084eaffad2bd6e28efa73d3d4973952107f5c490c482d9e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/band-wipe-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/band-wipe-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/band-wipe-stack/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 36,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "f879297e809df60cccc6a84428fbe47f9d3b63049b045986fd79ca37e261d944",
        "loop": "798d24837d6db2827610b9c221a4dabab1ae371d0fe2e59b1acba94870f3bca1",
        "detail": "e4bd31a0b992710c02e5cb536ae5c8e4754a9fc16b5957fba80c3eb68dbde7b6"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/band-wipe-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/band-wipe-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/band-wipe-stack/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 36,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "2f2d91ebaba6b5628eb305caa5b7267881d053d40597f49b65d574cf66b5082e",
        "loop": "8a20e9f4824e69ac7b9a9907800d9069e417e467d19d4505ab1b5aaa3bf2b71f",
        "detail": "3bf80a086bf8031a8fd3e227e00291810e04cfb010cb2cb4911fc93d769be029"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6ccda3963a57fefd753fd883b7d14e4eabfbea27638ff1179e73dab90ee53506/index.mjs",
    "sha256": "6ccda3963a57fefd753fd883b7d14e4eabfbea27638ff1179e73dab90ee53506",
    "bytes": 161043,
    "externals": [
      "@remotion/transitions",
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
      "flat": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:30:55.731Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
