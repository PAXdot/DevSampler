// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
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
    "scroll-to-highlight",
    "product-proof",
    "scroll-to-highlight",
    "interface"
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
    "title": "Find the part that matters",
    "subtitle": "Move through the document and anchor the evidence.",
    "items": [
      "Project overview",
      "Working notes",
      "The key result",
      "Next steps"
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
  "name": "Scrollable evidence anchor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-scroll-to-highlight",
    "bundleSha256": "b11f46ecf0e20c178aadb0ec827a11b648ad48a7c0bb0ab1fe4d7ad0b58b7cf0",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:47.705Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-paper.png",
        "sha256": "08eddc793d67291864999b8f70681d388cede27e51ae6c5c94b3467549d87b0a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-night.png",
        "sha256": "78aaf0075371218c0a842e294cd40d62bda9f6ab81221ec529c68c6c87116d24"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-color.png",
        "sha256": "64b7283f3e58ca3d779ef6155bce9c7fb038aceacf8572234653c3f77b727aee"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-paper.png",
        "sha256": "18cd4230b39969a781484e735cadf69952bd254d2901803459145a03bbf3a1ac"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-night.png",
        "sha256": "8be1506d7bc70e18001a9cad3b1a161aeed60839abfec726a8e14ffd5a47dd0f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-color.png",
        "sha256": "b3f16c8330aabe1df234a9ba2b3ad56973f2e9f2ba75e5024b169a5cc3da05a9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-paper.png",
        "sha256": "b39b8809685a76bfa65adea03fd013451abe82c0f6b84534c624ba3378473757"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-night.png",
        "sha256": "add8b595411b1a555014ee749e5cdf0769fc68977db5b3160a1013c543e87755"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-color.png",
        "sha256": "27a935398410e165dd30cf8191bc1c4e081bcf039555b7dd1e19656b2ce107fe"
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
          "lp-scroll-to-highlight--16x9",
          "lp-scroll-to-highlight--9x16",
          "lp-scroll-to-highlight--1x1"
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
            "paperNight": 139.64501953125,
            "paperColor": 12.822021484375,
            "region": {
              "left": 274,
              "top": 108,
              "width": 1412,
              "height": 864
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 131.43584526909723,
            "paperColor": 14.394721137152779,
            "region": {
              "left": 150,
              "top": 192,
              "width": 798,
              "height": 1536
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 136.79446072048611,
            "paperColor": 13.67111545138889,
            "region": {
              "left": 150,
              "top": 108,
              "width": 798,
              "height": 864
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
            "occupancy": 0.8338057445200304,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8338057445200304,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8338057445200304,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8377425044091713,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8377425044091713,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8377425044091713,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8377425044091712,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8377425044091712,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8377425044091712,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.848307291666667,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 6.848307291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-150-frame-18.png",
                "sha256": "199df092122b14525453801ffb7e8815884bd097997f1e55aad61d2eddd22677",
                "alphaMass": 299104
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-150-frame-132.png",
                "sha256": "fe2a5604312a6cbc2ee63ecb73e092faa7d0054985eabbcc6c6f2cf93c25203c",
                "alphaMass": 312782
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-150-frame-149.png",
                "sha256": "fe2a5604312a6cbc2ee63ecb73e092faa7d0054985eabbcc6c6f2cf93c25203c",
                "alphaMass": 312782
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.848307291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-900-frame-19.png",
                "sha256": "199df092122b14525453801ffb7e8815884bd097997f1e55aad61d2eddd22677",
                "alphaMass": 299104
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-900-frame-132.png",
                "sha256": "fe2a5604312a6cbc2ee63ecb73e092faa7d0054985eabbcc6c6f2cf93c25203c",
                "alphaMass": 312782
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-900-frame-792.png",
                "sha256": "fe2a5604312a6cbc2ee63ecb73e092faa7d0054985eabbcc6c6f2cf93c25203c",
                "alphaMass": 312782
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/16x9-duration-900-frame-899.png",
                "sha256": "fe2a5604312a6cbc2ee63ecb73e092faa7d0054985eabbcc6c6f2cf93c25203c",
                "alphaMass": 312782
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 7.911783854166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-150-frame-18.png",
                "sha256": "7c865cdfeda2ce2c0721bd8ab07f62c2db603500b32e6f37e398fdae290adeb6",
                "alphaMass": 299034
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-150-frame-132.png",
                "sha256": "c584e9171333381cfe5a335729efc0636044ae643e6a1b565331241886e7baf9",
                "alphaMass": 314610
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-150-frame-149.png",
                "sha256": "c584e9171333381cfe5a335729efc0636044ae643e6a1b565331241886e7baf9",
                "alphaMass": 314610
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.911783854166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-900-frame-19.png",
                "sha256": "7c865cdfeda2ce2c0721bd8ab07f62c2db603500b32e6f37e398fdae290adeb6",
                "alphaMass": 299034
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-900-frame-132.png",
                "sha256": "c584e9171333381cfe5a335729efc0636044ae643e6a1b565331241886e7baf9",
                "alphaMass": 314610
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-900-frame-792.png",
                "sha256": "c584e9171333381cfe5a335729efc0636044ae643e6a1b565331241886e7baf9",
                "alphaMass": 314610
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/9x16-duration-900-frame-899.png",
                "sha256": "c584e9171333381cfe5a335729efc0636044ae643e6a1b565331241886e7baf9",
                "alphaMass": 314610
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 7.006293402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-150-frame-18.png",
                "sha256": "c397100aac68743eb5ceb1517d476c14d19121b8c03505ad3d2f7fdf0d18e0b6",
                "alphaMass": 299337
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-150-frame-132.png",
                "sha256": "2b8566dca03af41f89bcf901513cad7d960475b7b451b938fa67ac8a57ba29da",
                "alphaMass": 312992
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-150-frame-149.png",
                "sha256": "2b8566dca03af41f89bcf901513cad7d960475b7b451b938fa67ac8a57ba29da",
                "alphaMass": 312992
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.006293402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-900-frame-19.png",
                "sha256": "c397100aac68743eb5ceb1517d476c14d19121b8c03505ad3d2f7fdf0d18e0b6",
                "alphaMass": 299337
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-900-frame-132.png",
                "sha256": "2b8566dca03af41f89bcf901513cad7d960475b7b451b938fa67ac8a57ba29da",
                "alphaMass": 312992
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-900-frame-792.png",
                "sha256": "2b8566dca03af41f89bcf901513cad7d960475b7b451b938fa67ac8a57ba29da",
                "alphaMass": 312992
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-scroll-to-highlight/1x1-duration-900-frame-899.png",
                "sha256": "2b8566dca03af41f89bcf901513cad7d960475b7b451b938fa67ac8a57ba29da",
                "alphaMass": 312992
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A document scrolls to a highlighted key result tagged in brand blue."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b11f46ecf0e20c178aadb0ec827a11b648ad48a7c0bb0ab1fe4d7ad0b58b7cf0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "54adc532b6a5482e9c782c3f05b2680f057abcbf4c405ee70a29d688ac8fab31",
        "loop": "0e25e709191df4e8dcfea3b5aacbdbc74ed1240003639beb67e62d758f5633a5",
        "detail": "83a5e3708b5547f94363f92cb4ef89a26174de4665bc85f4d0c820efb44cdccd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "87b520eb4341c7eb3ecca5b98f66bb7b2da4fbf17b3312f18a6be0fe765061ee",
        "loop": "9443e3ac47a695067c2b733aba32ebbf675b41cca3f0d37548dfb0ffb74c4cba",
        "detail": "fbba443cff87af0fb8f749867a122be77b39e446e7b71c6761ec5f4d33dec29d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-scroll-to-highlight/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01d24859854dd13018f0f82a6c45647a84204c5bfb9767a3bf47f052f37609cf",
        "loop": "9e755f32d638f208a840bcc2f1c82937ba31f475024cade36a5f127cf7b769a5",
        "detail": "4c57c3f083e2da1c369fafc6102475f84c5ede690d12900c14a757c413c09a11"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b11f46ecf0e20c178aadb0ec827a11b648ad48a7c0bb0ab1fe4d7ad0b58b7cf0/index.mjs",
    "sha256": "b11f46ecf0e20c178aadb0ec827a11b648ad48a7c0bb0ab1fe4d7ad0b58b7cf0",
    "bytes": 298419,
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
    "at": "2026-10-09T03:34:33.499Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
