// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "neon-sign-flicker-vu-meters"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "neon-sign-flicker-vu-meters",
    "live",
    "radio",
    "session",
    "neon"
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
      "key": "sign",
      "type": "text",
      "maxChars": 10,
      "role": "label"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 56,
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
      "target": "neon-sign-flicker-vu-meters",
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
    "ink": "#F6E9DC",
    "accent": "#FF4A3D",
    "secondary": "#F3C982",
    "paper": "#0D0608",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "sign": "on air",
    "kicker": "tidewell presents",
    "title": "The Late Session",
    "sub": "Live from studio b with the Ezra Moon Quartet"
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
      "key": "sign",
      "label": "Sign",
      "type": "text",
      "max": 10,
      "role": "label"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 56,
      "role": "caption"
    }
  ],
  "name": "On Air Live Session",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-on-air",
    "bundleSha256": "86200b19f2c1105105ed535a09464b8920acae6d246a28ec4005c57f332586e6",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:03.480Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-paper.png",
        "sha256": "19cf564093370a1ae36cef8ff3179bbff5ce753ea7050870ae9baee35f0b0851"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-night.png",
        "sha256": "0bc0a0ccae0038ca3feea573abd5171768ef07d4afed8a12987da841e1e88bf7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-color.png",
        "sha256": "12731f2d86183dd7636eaead649677dd141fd773929bdac008762fa184b361b5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-paper.png",
        "sha256": "f7cd0b25ec9ce7f454e343e2fe15fe81e6777d65dfc63028e9c7decf90e777e9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-night.png",
        "sha256": "f7a0afa12c2e66a84d97f3475f3e9aafdfc57be5b2980f64052db055766f0c0b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-color.png",
        "sha256": "a8db7e9b7db7da50ed73f636936be8798a5f89a5996e258be7f613d76f1a95de"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-paper.png",
        "sha256": "ec4de4b6cc30858dc0bd7666c16bff3824e745b1daed4169cfa16102e199cb93"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-night.png",
        "sha256": "3c71c37073c4d81c6d7f335a0abcfe345fe60ce54f9f12007c6f1e125c370781"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-color.png",
        "sha256": "899885d4cbf526bbbc7423d3fb89663f888723524253302fa30d877debdf05f7"
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
          "mg-audio-on-air--16x9",
          "mg-audio-on-air--9x16",
          "mg-audio-on-air--1x1"
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
            "paperNight": 34.86387803819444,
            "paperColor": 15.548258463541666,
            "region": {
              "left": 192,
              "top": 18,
              "width": 1613,
              "height": 1061
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.562418619791664,
            "paperColor": 20.071424696180557,
            "region": {
              "left": 53,
              "top": 64,
              "width": 974,
              "height": 1709
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.485134548611114,
            "paperColor": 16.87041558159722,
            "region": {
              "left": 73,
              "top": 67,
              "width": 933,
              "height": 918
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
            "occupancy": 1.1696776591938218,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1696776591938218,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1696776591938218,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.137673031532572,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.137673031532572,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1370073363707625,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0406824766943816,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0395488356522309,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0384151946100801,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.74533420138889,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.871527777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-90-frame-10.png",
                "sha256": "0c48eab7ffb1a32d8e05180866a08733c18c16c2de36c5174bea29a7de498157",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-90-frame-89.png",
                "sha256": "f969d2660f4730104c0dc9966b4e2f94280830661391c9f30b25bfcc8223b1bd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-90-frame-79.png",
                "sha256": "f969d2660f4730104c0dc9966b4e2f94280830661391c9f30b25bfcc8223b1bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.74533420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-900-frame-14.png",
                "sha256": "c5a48c077ba791fcce66d03bec24e8d13c1b4ccca3a0afc43d17a5eb91836c17",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-900-frame-96.png",
                "sha256": "f969d2660f4730104c0dc9966b4e2f94280830661391c9f30b25bfcc8223b1bd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-900-frame-792.png",
                "sha256": "f969d2660f4730104c0dc9966b4e2f94280830661391c9f30b25bfcc8223b1bd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/16x9-duration-900-frame-899.png",
                "sha256": "f969d2660f4730104c0dc9966b4e2f94280830661391c9f30b25bfcc8223b1bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.964735243055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-90-frame-10.png",
                "sha256": "90b83f38b7ad1e3529375845f7da181a859c4e0558c3a93ba4cc325d6c55526f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-90-frame-89.png",
                "sha256": "84f2fa4c8b8534dd3545f8facae85e1366048b36e647787c5cdbcac1360c64dc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-90-frame-79.png",
                "sha256": "84f2fa4c8b8534dd3545f8facae85e1366048b36e647787c5cdbcac1360c64dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 19.03103298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-900-frame-14.png",
                "sha256": "2cf9f735e25e14c2a6e04b3b31f18115bdcef53ff58a020b4d7989b4e37b0c66",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-900-frame-96.png",
                "sha256": "84f2fa4c8b8534dd3545f8facae85e1366048b36e647787c5cdbcac1360c64dc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-900-frame-792.png",
                "sha256": "84f2fa4c8b8534dd3545f8facae85e1366048b36e647787c5cdbcac1360c64dc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/9x16-duration-900-frame-899.png",
                "sha256": "84f2fa4c8b8534dd3545f8facae85e1366048b36e647787c5cdbcac1360c64dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 14.43044704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-90-frame-10.png",
                "sha256": "278eea6d426e1740982d8e4237da105f70601e95d325e1b402dc0b7d41098199",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-90-frame-89.png",
                "sha256": "63b17b0958ae870cd8c148e4a047f8244ff4b9d6245bed3750f373147721fb7b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-90-frame-79.png",
                "sha256": "63b17b0958ae870cd8c148e4a047f8244ff4b9d6245bed3750f373147721fb7b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.34743923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-900-frame-14.png",
                "sha256": "c5bf4cd1686b42d0360d6e269480defeac0000df43b47eb8d54d36191f0d84b2",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-900-frame-96.png",
                "sha256": "63b17b0958ae870cd8c148e4a047f8244ff4b9d6245bed3750f373147721fb7b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-900-frame-792.png",
                "sha256": "63b17b0958ae870cd8c148e4a047f8244ff4b9d6245bed3750f373147721fb7b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-on-air/1x1-duration-900-frame-899.png",
                "sha256": "63b17b0958ae870cd8c148e4a047f8244ff4b9d6245bed3750f373147721fb7b",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Neon on-air sign, mic and VU meters beside a flowing serif session title; no overlaps in any brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "86200b19f2c1105105ed535a09464b8920acae6d246a28ec4005c57f332586e6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-on-air/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-on-air/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-on-air/16x9/detail.mp4",
      "bg": "#150f10",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "85bfb9743e16b5de4f04a9c105642e33b07aa824abf7cc430c8cd6722904590d",
        "loop": "ff39453553570823242828134c44738e42063b697c1b8a0b5702fb9b3fc7c905",
        "detail": "3e425d1a9e19e4eb0f864b71ca4e7c6054af9e9472794f48d4723ce37d632c55"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-on-air/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-on-air/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-on-air/9x16/detail.mp4",
      "bg": "#150f10",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9e07c416e0fc0be0d98e158484e7023317a060e11b81766e36e6a04794f1a9d6",
        "loop": "9b1d5801142e8499a6c3e0f7723d0e00999e556ff4f272b52bbc6736ba219198",
        "detail": "175c68aaa1328b110eb1c224baa518c42f86a44e98e67173decf5f3096372dfd"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-on-air/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-on-air/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-on-air/1x1/detail.mp4",
      "bg": "#150f10",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c8f7855da751661a09a2ac7a64c956242fde31695bcc2d7af9dcc77cf45c0ffa",
        "loop": "d76938c34afc372814ad37f5a2e7053ea91f1c5b83ce512466b598fa1f5cf5ae",
        "detail": "cab608ce52f6febd4a510aee1c0eb970eb1314c4fcedb986a688b206688bd7b1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/86200b19f2c1105105ed535a09464b8920acae6d246a28ec4005c57f332586e6/index.mjs",
    "sha256": "86200b19f2c1105105ed535a09464b8920acae6d246a28ec4005c57f332586e6",
    "bytes": 260224,
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
    "at": "2026-10-09T07:09:31.497Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
