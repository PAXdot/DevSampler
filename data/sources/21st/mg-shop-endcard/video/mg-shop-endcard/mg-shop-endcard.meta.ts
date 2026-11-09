// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "crossing-tapes-wordmark-cta"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "crossing-tapes-wordmark-cta",
    "end-card",
    "cta",
    "brand"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "brand",
      "type": "text",
      "maxChars": 8,
      "role": "label"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 14,
      "role": "cta"
    },
    {
      "key": "url",
      "type": "text",
      "maxChars": 18,
      "role": "label"
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
      "target": "crossing-tapes-wordmark-cta",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#1A120D",
    "accent": "#FFF4E8",
    "secondary": "#FFB38A",
    "paper": "#FF5B2E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "loma",
    "tagline": "the fall drop is live.",
    "cta": "shop now",
    "url": "loma.shop"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 8,
      "role": "label"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 14,
      "role": "cta"
    },
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Brand Tape End Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-endcard",
    "bundleSha256": "297864a4de494bad95246c02276412c00bb75ff178b369f788fbca3779c4d26f",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:48:18.717Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-paper.png",
        "sha256": "f409cc7711e74a93b688b1140192a6ad4194363517207043de3e6558b721b6ac"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-night.png",
        "sha256": "ad2091186365cb51ecab4c128cfc2da32462889b36af76f452b71081f091b9de"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-color.png",
        "sha256": "0f0fe6c0b8225d752d58c7a25bd7dfb82702d78c557704edee9c1fe7f50d96f8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-paper.png",
        "sha256": "fa469ef21e2dff5ac8046af0b418f6211ce31dd8c46fdb0ba14edb185835d058"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-night.png",
        "sha256": "16d721e763f3250a0baa73f05aa00f389bba31a3fa0d68dde574c902913dc5d9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-color.png",
        "sha256": "55a030bccfa74afb4f4a96a788d62bbcc95c30165e8fa013578c301afa81b232"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-paper.png",
        "sha256": "2cab92fea663c976ddb653e05d00c8a83f230ccb6d43f7b81fe058115829b323"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-night.png",
        "sha256": "1b3c68a0a0d969ce98b14a6c4b3f0541684ad6cfb9cdf727d87bab59794d01c1"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-color.png",
        "sha256": "0501f9866be310f6eec03bb22f15daa993df506ca2f1d86937f751d9722aa580"
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
          "mg-shop-endcard--16x9",
          "mg-shop-endcard--9x16",
          "mg-shop-endcard--1x1"
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
            "paperNight": 43.94843207465278,
            "paperColor": 17.913736979166668,
            "region": {
              "left": 0,
              "top": 116,
              "width": 1920,
              "height": 935
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.615804036458336,
            "paperColor": 19.740234375,
            "region": {
              "left": 0,
              "top": 246,
              "width": 1080,
              "height": 1537
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.49896918402778,
            "paperColor": 19.49555121527778,
            "region": {
              "left": 0,
              "top": 164,
              "width": 1080,
              "height": 854
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
            "occupancy": 1.2269568321155626,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2269568321155626,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2269568321155626,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1345249905517765,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1345249905517765,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1345249905517765,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.107541782144957,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1088540354413372,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1206643151087599,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.84982638888889,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 23.381727430555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-90-frame-10.png",
                "sha256": "4e14f4083c1cf4593be694edb28f97227dd4f0f95143e3b24bfa03a90b19b4d9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-90-frame-89.png",
                "sha256": "88340171a2227fd3859afdf10b0b195f41e258ab219cf9bc0cc79302a25306c8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-90-frame-79.png",
                "sha256": "816024dd24e7fef33444706ddde49b8e3b0f55f857fa478cf6aaba3e5fc40c6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 22.84982638888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-900-frame-14.png",
                "sha256": "741bbfd63857f24dbc2ee161ee701ed33f5537972b60ff4d0254d5f284a7718a",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-900-frame-96.png",
                "sha256": "88340171a2227fd3859afdf10b0b195f41e258ab219cf9bc0cc79302a25306c8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-900-frame-792.png",
                "sha256": "88340171a2227fd3859afdf10b0b195f41e258ab219cf9bc0cc79302a25306c8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/16x9-duration-900-frame-899.png",
                "sha256": "816024dd24e7fef33444706ddde49b8e3b0f55f857fa478cf6aaba3e5fc40c6d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 16.65776909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-90-frame-10.png",
                "sha256": "c224f81d084576de6644af686a54645ad91655bc8de2d25a1ca523c4d97fb7d5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-90-frame-89.png",
                "sha256": "c42c0c8c120972f56a0f324086478ab32f28d67b95ad68497bab4ab7363e1253",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-90-frame-79.png",
                "sha256": "c42c0c8c120972f56a0f324086478ab32f28d67b95ad68497bab4ab7363e1253",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 16.43793402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-900-frame-14.png",
                "sha256": "0ecd480723b769bbfb780483d5ed8e3fbde57b234396c88f75548d35a7bdf783",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-900-frame-96.png",
                "sha256": "4198bf21bee170b27bc986ae04e6335a83a88af41d542b05aeaeffd70d3e478b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-900-frame-792.png",
                "sha256": "4198bf21bee170b27bc986ae04e6335a83a88af41d542b05aeaeffd70d3e478b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/9x16-duration-900-frame-899.png",
                "sha256": "c42c0c8c120972f56a0f324086478ab32f28d67b95ad68497bab4ab7363e1253",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 18.25629340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-90-frame-10.png",
                "sha256": "0eceee152ca1e28e0bd7f47576e0eb898af77f7e5e5912602245fc68bda94ed0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-90-frame-89.png",
                "sha256": "88752f31a2dd23151dde05b68de7ca5d4bc58bf1d0de48695b6f4cc8d6a7df04",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-90-frame-79.png",
                "sha256": "1851264fbbd9289ada6565ba5e967d309d9686fd621ca94fb42ec4848296f58f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 17.92230902777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-900-frame-14.png",
                "sha256": "7206b466c1408f41e21bb230e01fdd2f1fabce8e2d2e853f37c087e7e14a470b",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-900-frame-96.png",
                "sha256": "3c9b97fed7968c509a494ae3e41880e3898fe75ad6aeea370516a7462e8b4808",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-900-frame-792.png",
                "sha256": "79094ed507b605eb1e999770b82b219d4f3a36b2b29d968a4e8244742c3e178d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-shop-endcard/1x1-duration-900-frame-899.png",
                "sha256": "232a8f6830b13f58b6335d3428a7e56ab03a95a8a91907e5e03c16670ba0e178",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Brand wordmark end card with tagline, shop button and crossing tapes; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "297864a4de494bad95246c02276412c00bb75ff178b369f788fbca3779c4d26f",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.849Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-endcard/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-endcard/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-endcard/16x9/detail.mp4",
      "bg": "#fb592d",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f9cf3f21b4f2abbeae55cd8b560d9fee5538f65acf29800a19ce2a58c06c45b6",
        "loop": "7e3b526e2a76dd46bfca6f0c17657e19aa99281cb8b42eb35d0ed1fb9d8b6222",
        "detail": "1d432fcfc4716b00fbfc41fa31887ee1df60385aa891a8341eac475927fea602"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-endcard/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-endcard/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-endcard/9x16/detail.mp4",
      "bg": "#fb592d",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4f4f70952089a43c8e2f04f96e5c42b912013c9ffcdaf24424a7b7e6fcc585db",
        "loop": "e838496e6ecb67b76214ff8c794ad24f38665f7c722f8803b3ca52a2e6fd8956",
        "detail": "aaa3614e3460ee738ca41d4cb410d25e0072da9bcbe01dc4219b03a97afa09a2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-endcard/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-endcard/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-endcard/1x1/detail.mp4",
      "bg": "#fb592d",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ad14dac7139e1b6df47666906c5379d392df30dffcc16050a1079783beeb3c20",
        "loop": "4e34cd76bd2ece2d97dd60683370036ad59f9e2dfa2d392a5bbc61a9d70193bd",
        "detail": "7969e0091875de62efc3b36dbef6042efcc03e28c362e72596b288515c4c87c3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/297864a4de494bad95246c02276412c00bb75ff178b369f788fbca3779c4d26f/index.mjs",
    "sha256": "297864a4de494bad95246c02276412c00bb75ff178b369f788fbca3779c4d26f",
    "bytes": 304508,
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
    "at": "2026-10-09T08:03:06.020Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
