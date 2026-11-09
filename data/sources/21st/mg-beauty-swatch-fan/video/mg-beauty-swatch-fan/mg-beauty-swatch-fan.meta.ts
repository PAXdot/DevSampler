// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "swatch-fan-open-pick-shade"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "swatch-fan-open-pick-shade",
    "beauty",
    "nails",
    "shades",
    "palette"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 10,
      "role": "headline"
    },
    {
      "key": "body",
      "type": "text",
      "maxChars": 70,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 32,
      "role": "cta"
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
      "target": "swatch-fan-open-pick-shade",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#2B1D14",
    "accent": "#5A1E3C",
    "secondary": "#8A5A3C",
    "paper": "#F3E5BF",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "autumn edit · no. 06",
    "name": "Fig Jam",
    "body": "Gel polish with 21-day wear. Vegan, cured in 60 seconds.",
    "cta": "Try all 8 in salon · from $45"
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
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 10,
      "role": "headline"
    },
    {
      "key": "body",
      "label": "Body",
      "type": "text",
      "max": 70,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 32,
      "role": "cta"
    }
  ],
  "name": "Shade Swatch Fan",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-swatch-fan",
    "bundleSha256": "b27982a54713ed5342737854c089ae8be13c5433947d08cd1a09974013990881",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:45:50.212Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-paper.png",
        "sha256": "ed5b40987dda1670dba7f2f951c6e9755e63ff7e45d133558d9b8a57628b89e5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-night.png",
        "sha256": "b4400d0b66080650c747ca5f04a53d941c0276eeab8478e7406f37ead4772ca3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-color.png",
        "sha256": "b00132c230534bda8d7b9836dd09fc2631382d2ef243f68bad8f6faafe3b52d8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-paper.png",
        "sha256": "6fb86d33ae9a20a2a600bf1b9580f5675ab59245c69fd2e171b37bce8d3cf4dd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-night.png",
        "sha256": "72e177bdaaf7cdff03f38509f90b2e7b88d13181ecaf65d3d7dbe5e03d5f6cef"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-color.png",
        "sha256": "a967a4bd689e8322a26438afdd1f571db7cafba4e8c175d3395ea91f7fd4cb98"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-paper.png",
        "sha256": "40fbe6ca00ff9dcb32332fc7d778fc27a69697413e1a5782be483cff4a039d75"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-night.png",
        "sha256": "41d88b7c171fd832feb895956c7a845da715cdefbfd2ea173ee95b9ae5a40e35"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-color.png",
        "sha256": "bd5e3c387c179e85ff3c44fdb583cdfdb6ef2beb05a68db7551f83bea9105ef8"
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
          "mg-beauty-swatch-fan--16x9",
          "mg-beauty-swatch-fan--9x16",
          "mg-beauty-swatch-fan--1x1"
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
            "paperNight": 17.74951171875,
            "paperColor": 10.555094401041666,
            "region": {
              "left": 104,
              "top": 226,
              "width": 1664,
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
            "paperNight": 36.85679796006944,
            "paperColor": 18.80447048611111,
            "region": {
              "left": 85,
              "top": 154,
              "width": 947,
              "height": 1651
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.43671332465278,
            "paperColor": 10.531819661458334,
            "region": {
              "left": 65,
              "top": 69,
              "width": 961,
              "height": 957
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
            "occupancy": 0.939398393102097,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.939398393102097,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9298011739417992,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0685958813180625,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0685958813180625,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0679486397182332,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1162852772567649,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1162852772567649,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1174529396806736,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.889756944444445,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 15.888129340277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-90-frame-10.png",
                "sha256": "52e87d2c62be38c4ba4f8cd86aa3fb403e5401dc6581574db0a59c5947206831",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-90-frame-89.png",
                "sha256": "5d12a50c8a3074454127403fbb935ba32fb99a80cc32ad6fecf44f962d1ce527",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-90-frame-79.png",
                "sha256": "5d12a50c8a3074454127403fbb935ba32fb99a80cc32ad6fecf44f962d1ce527",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 15.889756944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-900-frame-13.png",
                "sha256": "5eabcf4ee013e47a34c3d6f6272b73d2ed671be9605a092320b7e5ced75d9992",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-900-frame-90.png",
                "sha256": "abf2874049653bb07029a8dc94613547e41273ed4feb5f5c135024fe2852bcb0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-900-frame-792.png",
                "sha256": "abf2874049653bb07029a8dc94613547e41273ed4feb5f5c135024fe2852bcb0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/16x9-duration-900-frame-899.png",
                "sha256": "5d12a50c8a3074454127403fbb935ba32fb99a80cc32ad6fecf44f962d1ce527",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 21.34841579861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-90-frame-10.png",
                "sha256": "eff8fcc346ac438266cb651328a29adbd579fb96acfd7ba3c1c7f45dd5f0d28f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-90-frame-89.png",
                "sha256": "0354ab25cf6b265f8ea8572135c91e1518e51ea4558b29f3974e0d7ff9cf082b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-90-frame-79.png",
                "sha256": "5172ef117c081ffdf8259342db5578cf7d10e46ce3c314c42750feb78af06329",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 21.348741319444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-900-frame-13.png",
                "sha256": "8dccd2e8465fc058cb1106d32ddd13f41632c50d8b29e181c6d32564a600a3e1",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-900-frame-90.png",
                "sha256": "5172ef117c081ffdf8259342db5578cf7d10e46ce3c314c42750feb78af06329",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-900-frame-792.png",
                "sha256": "5172ef117c081ffdf8259342db5578cf7d10e46ce3c314c42750feb78af06329",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/9x16-duration-900-frame-899.png",
                "sha256": "45af0141689ad46ce9f589a68505a9ab000e03aaefc441cc3015e1fcf9692796",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.308159722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-90-frame-10.png",
                "sha256": "aa5092b80035b80dcacd85bb7771425cb5ed01d8ce2b0cdbedc552b28101b01b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-90-frame-89.png",
                "sha256": "8c4de97c149164a0cd3ef43f34d15b22449cd6ed97d15e270a59338744b8ca2c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-90-frame-79.png",
                "sha256": "8c4de97c149164a0cd3ef43f34d15b22449cd6ed97d15e270a59338744b8ca2c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.307725694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-900-frame-13.png",
                "sha256": "5b8f182570d350caa7ddf72f08d4e71855332e87147255ea1fc93f813ef3d467",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-900-frame-90.png",
                "sha256": "8c4de97c149164a0cd3ef43f34d15b22449cd6ed97d15e270a59338744b8ca2c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-900-frame-792.png",
                "sha256": "8c4de97c149164a0cd3ef43f34d15b22449cd6ed97d15e270a59338744b8ca2c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-beauty-swatch-fan/1x1-duration-900-frame-899.png",
                "sha256": "7badb4dca9046735d41dab2a6a284c2c29ef5da4f1a5e487e76fa84dcde4703a",
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
        "note": "Polish swatches fan out to the featured shade beside its name and CTA; rebrands recolor the shade."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b27982a54713ed5342737854c089ae8be13c5433947d08cd1a09974013990881",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.844Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/16x9/detail.mp4",
      "bg": "#efe0ba",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b23c0bcf97af414902c3626c34f99c3ec87419b77f4eef3a4b9899f03fb588a2",
        "loop": "20403043c2d7affec324ecc194be1aa812eb228aea9f3502ecc1de3b09f831f0",
        "detail": "3646536cded965232505afb79c34f30cc8bf10054b7812a0dda9336038a4b28f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/9x16/detail.mp4",
      "bg": "#efe0ba",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9891c073aad7d38a35663a01ce8d0a0e92da99e74e9d2b01e611f646ca11e2bc",
        "loop": "ca538cb3e3fbd83f9494dadacf4ef4a833f32330e4ee7e5c4e1e41031aad8797",
        "detail": "5b39fc137f33a88809747e1313a1d2d1489f13bf96e976361010f57236ea5cff"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-swatch-fan/1x1/detail.mp4",
      "bg": "#efe0ba",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2371324bf7bde236fa51200686455d10370e89f390e9a49af4b651b558478212",
        "loop": "f8506e3cc82ff29d9c3b201a21e169b5669e14c1d92e691ba55ac41c309aa23a",
        "detail": "94d32352c510042d2fd177fe62e422f6dc764a8c700a3def9a252c4f7fe2f47c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b27982a54713ed5342737854c089ae8be13c5433947d08cd1a09974013990881/index.mjs",
    "sha256": "b27982a54713ed5342737854c089ae8be13c5433947d08cd1a09974013990881",
    "bytes": 265043,
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
    "at": "2026-10-09T08:00:37.997Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
