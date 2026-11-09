// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "divider-wipe-reveals-result"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "divider-wipe-reveals-result",
    "beauty",
    "hair",
    "before-after",
    "transformation"
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
      "key": "before",
      "type": "text",
      "maxChars": 10,
      "role": "label"
    },
    {
      "key": "after",
      "type": "text",
      "maxChars": 10,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "divider-wipe-reveals-result",
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
    "ink": "#2B1A14",
    "accent": "#B2512A",
    "secondary": "#7A6052",
    "paper": "#F0D3BC",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "before": "before",
    "after": "after",
    "title": "Copper balayage",
    "sub": "by Inès Marlowe · 3 h 20 min"
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
      "brand": "fonts.serif"
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
      "key": "before",
      "label": "Before",
      "type": "text",
      "max": 10,
      "role": "label"
    },
    {
      "key": "after",
      "label": "After",
      "type": "text",
      "max": 10,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Color Before After",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-before-after",
    "bundleSha256": "ec317a661d622b0dddfd96d19ba113ea0d80013ae874b5dde6fe19c79f4931fb",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:28:11.659Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-paper.png",
        "sha256": "439609439d4a6d2864b1109e0df3e48b7d58534e0a64ebf46c6ddef3abb07aef"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-night.png",
        "sha256": "8651a36e6adacfc7d0a6d5d4794b46401940c5ea87e57813767eb5b75d07e5c1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-color.png",
        "sha256": "a8ff45b74f31328c4a39292297f99072a42069ade7f382739557b2ea40333005"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-paper.png",
        "sha256": "8626fc72b961716a1d531f6951c8a7bef425c7f085e90ad4e0a7cf1051339da1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-night.png",
        "sha256": "21ead1feb9d3df963c94d92d346fce9142ed1088211c040b1d1a0fa8dacc7346"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-color.png",
        "sha256": "0817cc1c1fe15659ce011a1e2b4d21b032318c56d60fcfd359e2dca93ce69c7a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-paper.png",
        "sha256": "7a5682ea391f42b706622076ca458ae2b2a6169c943b06b0c11789e23bbee85c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-night.png",
        "sha256": "a39f17dd844fea7614febf937643746ad3206f8fba7716de9d3664257f11adca"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-color.png",
        "sha256": "8abcd555956dbd66141dc34ed19071231cbaebcfae8ad1ff03869ac784051580"
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
          "mg-beauty-before-after--16x9",
          "mg-beauty-before-after--9x16",
          "mg-beauty-before-after--1x1"
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
            "paperNight": 41.204182942708336,
            "paperColor": 10.398193359375,
            "region": {
              "left": 85,
              "top": 71,
              "width": 1595,
              "height": 1009
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 52.707980685763886,
            "paperColor": 15.378743489583334,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 60.334689670138886,
            "paperColor": 9.603217230902779,
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
            "occupancy": 1.0999382311437953,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0040815451695084,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9654630242014504,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.645182291666667,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.68359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-90-frame-10.png",
                "sha256": "73d92834edf07c0e7a69c30f03b1e1d04f7488859b234a2c1c4dd44c75e28423",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-90-frame-89.png",
                "sha256": "0c2724af36e1625acc16c9bc2f1e954d246e6b93e8982ac8296057de57c9feee",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-90-frame-79.png",
                "sha256": "0c2724af36e1625acc16c9bc2f1e954d246e6b93e8982ac8296057de57c9feee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.645182291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-900-frame-13.png",
                "sha256": "678caf762e77efad0716347d3a2faaf3140d13e1529266328f87019239a41f51",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-900-frame-90.png",
                "sha256": "0c2724af36e1625acc16c9bc2f1e954d246e6b93e8982ac8296057de57c9feee",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-900-frame-792.png",
                "sha256": "0c2724af36e1625acc16c9bc2f1e954d246e6b93e8982ac8296057de57c9feee",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/16x9-duration-900-frame-899.png",
                "sha256": "0c2724af36e1625acc16c9bc2f1e954d246e6b93e8982ac8296057de57c9feee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 19.42751736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-90-frame-10.png",
                "sha256": "7f1238ec9f9996c870f4802a2a13a058c8c3048814c30a023761684a9e69c4a5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-90-frame-89.png",
                "sha256": "1a4995eff76690edfe4e04b18e34c8022823bf827e4d434ea3ede6bd6a96c420",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-90-frame-79.png",
                "sha256": "c4e3ab040362d9bf6895b072fa04d9f6c1d0bdb28ef8cee555f2759fbdeabe24",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 19.317057291666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-900-frame-13.png",
                "sha256": "c45f0b7ab5d4113537bddf70f56b540c23b4b78fac613b8a0e7fc13751f69727",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-900-frame-90.png",
                "sha256": "c4e3ab040362d9bf6895b072fa04d9f6c1d0bdb28ef8cee555f2759fbdeabe24",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-900-frame-792.png",
                "sha256": "c4e3ab040362d9bf6895b072fa04d9f6c1d0bdb28ef8cee555f2759fbdeabe24",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/9x16-duration-900-frame-899.png",
                "sha256": "c4e3ab040362d9bf6895b072fa04d9f6c1d0bdb28ef8cee555f2759fbdeabe24",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 18.998372395833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-90-frame-10.png",
                "sha256": "3bfb5397ee82c62b00c293fc4b91787ae12439729f612f4b688b06c60cdc530d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-90-frame-89.png",
                "sha256": "25510fe0609d626b0e15d28ac5b68a895948e143686dc4ce58602b19e903bf66",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-90-frame-79.png",
                "sha256": "25510fe0609d626b0e15d28ac5b68a895948e143686dc4ce58602b19e903bf66",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 18.91037326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-900-frame-13.png",
                "sha256": "c76b1843b6faeb1fb3e9dee1df8ff41960354331feed145b645d723e0be4ab43",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-900-frame-90.png",
                "sha256": "25510fe0609d626b0e15d28ac5b68a895948e143686dc4ce58602b19e903bf66",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-900-frame-792.png",
                "sha256": "25510fe0609d626b0e15d28ac5b68a895948e143686dc4ce58602b19e903bf66",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-before-after/1x1-duration-900-frame-899.png",
                "sha256": "25510fe0609d626b0e15d28ac5b68a895948e143686dc4ce58602b19e903bf66",
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
        "note": "Hair color before/after split beside a serif service title and price; rebrands recolor the after side."
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
      "bundleSha256": "ec317a661d622b0dddfd96d19ba113ea0d80013ae874b5dde6fe19c79f4931fb",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/16x9/detail.mp4",
      "bg": "#f1d6c1",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "91d6291a1bb5f273158d760747f1802ea4238191de75eb0ce5a37e9b8d3895a2",
        "loop": "92291ce3033b5a6e50613ba2f78eb3fc28bb5d22fe1669e50a2a51ed68dcbbe3",
        "detail": "f99848d8814cc5e6bf0bb2e850e95e86b644eff86362307a21fdfe0b9e3b3e31"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/9x16/detail.mp4",
      "bg": "#d4c7bb",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "921b3594b84e74971229d116934cd41506fe13530c3801e2fc8a280484ffee59",
        "loop": "502379a8b623a4ff3dfd4e80744e9d352029aba667a0aaa2080a12b7069e4666",
        "detail": "2e050663f60b8dcc428d21ec7a81dc3086276b937d9c4a0a7c11660c3ce70f27"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-before-after/1x1/detail.mp4",
      "bg": "#cfc2b7",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e343b53d07184be50963718cd0442084554e5dd84cfa012173539246f222ba83",
        "loop": "9cfff916fa9828d636bd2280a704331dc1f70afdffff15c63af00c63e24251d3",
        "detail": "754e43e22e5118024d3ca9c5bdc1482677b7bb9311db54c85451b8177b42f6eb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ec317a661d622b0dddfd96d19ba113ea0d80013ae874b5dde6fe19c79f4931fb/index.mjs",
    "sha256": "ec317a661d622b0dddfd96d19ba113ea0d80013ae874b5dde6fe19c79f4931fb",
    "bytes": 253012,
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
    "at": "2026-10-09T07:10:59.308Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
