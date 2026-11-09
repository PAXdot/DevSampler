// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "hard-cuts-on-beat-timeline"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "hard-cuts-on-beat-timeline",
    "beat-sync",
    "montage",
    "launch"
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
      "in": 138,
      "out": 0
    },
    "markers": {
      "settled": 138
    },
    "beats": [
      0,
      35,
      69,
      104,
      138
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
      "key": "headline",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "stat",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 10,
      "role": "name"
    },
    {
      "key": "tagline",
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "hard-cuts-on-beat-timeline",
      "prop": "transform",
      "from": "enter",
      "settledBy": 138,
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
    "ink": "#F1ECE2",
    "accent": "#FF5B22",
    "secondary": "#2747FF",
    "paper": "#0D0D0F",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Meet Lumen.",
    "stat": "3.2×",
    "brand": "Lumen",
    "tagline": "Available today · lumen.app"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "stat",
      "label": "Stat",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 10,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Beat-Cut Sequence",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beat-cut-grid",
    "bundleSha256": "9e014019806938f2f776049a6f70e73ac65436895ef41d8127b0e459c3c86a44",
    "sourceSnapshot": {
      "sha256": "1f6ce6492f581e3c8c64310c021d09e41636a62ca2784e1de4c2e9015f49ad94",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:30:40.460Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-paper.png",
        "sha256": "f26bf4bfc36f1d3baf6deb23b90dcef2e510298e89524292b9c514191743df82"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-night.png",
        "sha256": "77072f1aa15ca1857f99440f204f04666a7a9156b0912ffa5ab7ab707ee102f2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-color.png",
        "sha256": "7647b88db0c72a7a2c141af8e64149e6ebd1e301a255b0cb7b1c30c813750b01"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-paper.png",
        "sha256": "134caa115e9bc8b8864d57589a99889304bd35ba844ef34ccb160d0517f3039b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-night.png",
        "sha256": "41c8c81b66af88048b3bfe327481ddf0789cbc0abb80fc68317604b34d6c0817"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-color.png",
        "sha256": "5ebb6a43ecfce00e43b06ba74e1c4f03eea4ff68875a68046f8ebc4f7f61cbe1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-paper.png",
        "sha256": "468f0731d7228bf3dc19d6fde3aef52311fabfb35201888b2f7425ab79311000"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-night.png",
        "sha256": "c0ad5daf9af555da9e7abca2aeb0bc97dfe3f34a25b45b74d27c32a48c366e18"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-color.png",
        "sha256": "af7ad3709d928c9490f9ffe9786705bd445d181ebbf5a193172d22401c03a8be"
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
          "mg-beat-cut-grid--16x9",
          "mg-beat-cut-grid--9x16",
          "mg-beat-cut-grid--1x1"
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
            "paperNight": 153.7783203125,
            "paperColor": 15.23947482638889,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 151.59800889756946,
            "paperColor": 14.500434027777779,
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
            "paperNight": 151.67097981770834,
            "paperColor": 15.75661892361111,
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 54.979275173611114,
        "frames": [
          20,
          138,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 54.974934895833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-90-frame-10.png",
                "sha256": "1cce107b100842bbf6e04396388f2377219c46c2d7156fa8780195272d09fc9b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-90-frame-89.png",
                "sha256": "50866021faf0e6e0b9f656b3b3b973d8735872b18b3c0cebd5cd980ff5240957",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-90-frame-79.png",
                "sha256": "f68d3c2d0ad44aa7c367f5cb8d3c9d6314a06b4aba8f90c39686f6b2d84d1e8d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 54.979275173611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-900-frame-20.png",
                "sha256": "ad35ee8add91821397eb6c4b94a4f6e6b66d2faffd828ce8920af422ad4f0808",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-900-frame-138.png",
                "sha256": "f68d3c2d0ad44aa7c367f5cb8d3c9d6314a06b4aba8f90c39686f6b2d84d1e8d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-900-frame-792.png",
                "sha256": "f68d3c2d0ad44aa7c367f5cb8d3c9d6314a06b4aba8f90c39686f6b2d84d1e8d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/16x9-duration-900-frame-899.png",
                "sha256": "f68d3c2d0ad44aa7c367f5cb8d3c9d6314a06b4aba8f90c39686f6b2d84d1e8d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 49.961697048611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-90-frame-10.png",
                "sha256": "0a1927b3d9fc978e64aa942807b34827c9bbf77ce1f29e382d9c242722b99e42",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-90-frame-89.png",
                "sha256": "7bdda0c3463d9207daa111cd91cdf1cdd6b1087236fb55581842b6de4793ed2a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-90-frame-79.png",
                "sha256": "c70bbc7be0ad118b7d4fd4cb9bd393422379291a2a7e93974c88a6e6b9c60925",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 49.99262152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-900-frame-20.png",
                "sha256": "0f047e8dd37cdbd8972f4ff18bdf83f046761cecd6717abe6f558b7e386d1044",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-900-frame-138.png",
                "sha256": "9006f555f167a08e3c1f639a71eaec0ef202d1fca993677b4160ed93d46d2219",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-900-frame-792.png",
                "sha256": "6e873e61cdc50103d337647d0fb6b58d95c34d9898f96252f09daf444d4c3870",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/9x16-duration-900-frame-899.png",
                "sha256": "c70bbc7be0ad118b7d4fd4cb9bd393422379291a2a7e93974c88a6e6b9c60925",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 53.22547743055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-90-frame-10.png",
                "sha256": "b18f9565d88eb88e0aae38cdcf0953b4b8730220c557f8f8d20092578b95274c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-90-frame-89.png",
                "sha256": "ae7672d99877b6a57f2fc65317e1b5b67f524b5983a8af3b6606e0a0bda3316c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-90-frame-79.png",
                "sha256": "ae7672d99877b6a57f2fc65317e1b5b67f524b5983a8af3b6606e0a0bda3316c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 53.238606770833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-900-frame-20.png",
                "sha256": "2cedcb37e79ff5d7cfc776a7a8f9da203232f70aaadf8cafd7c17732aa5f9a85",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-900-frame-138.png",
                "sha256": "ae7672d99877b6a57f2fc65317e1b5b67f524b5983a8af3b6606e0a0bda3316c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-900-frame-792.png",
                "sha256": "ae7672d99877b6a57f2fc65317e1b5b67f524b5983a8af3b6606e0a0bda3316c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-beat-cut-grid/1x1-duration-900-frame-899.png",
                "sha256": "ae7672d99877b6a57f2fc65317e1b5b67f524b5983a8af3b6606e0a0bda3316c",
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
        "note": "Four shots cut on the beat over a visible beat timeline, landing on the product lockup."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9e014019806938f2f776049a6f70e73ac65436895ef41d8127b0e459c3c86a44",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.505Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/16x9/detail.mp4",
      "bg": "#0d0d0f",
      "posterFrame": 138,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "02ee4179dbc1ba3ac60a99de4bbb36fd03a126e39bbc715fea05cf8b5d03de28",
        "loop": "64eab41fa8262fe8598254b85a1473dad2c7517c9febdf6e294dc01b11f4c65e",
        "detail": "81009260c7e1dbffe4f2a257cd32c6b05f4ada5958cbf4311aa2b401865cd18b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/9x16/detail.mp4",
      "bg": "#0d0d0f",
      "posterFrame": 138,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7d5e6a4bf9f7a0cd008fdae74127c79039728803967be01d19d64f1ab7c9be91",
        "loop": "fd6388f38c42b6067e99f2ec72353ec2125c47854f2e5b68a4227846ea2ae4f6",
        "detail": "8e2b1d42f3396bf66e488ef35c4021c176655142b39c5aa386c7daa687aeb268"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-cut-grid/1x1/detail.mp4",
      "bg": "#0d0d0f",
      "posterFrame": 138,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "87e070d5c221296272c72b24f154ca92c31ec8b56bde813eff72255663e5860c",
        "loop": "81c030e5c5d3a27da85b03bcfdfe2d40a0a0fc3dc8853471f44eeb85f94b630d",
        "detail": "f1709d2ccf7d555857527da9606b40e65ed5c88ea2906eeb65dcd923c7459371"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9e014019806938f2f776049a6f70e73ac65436895ef41d8127b0e459c3c86a44/index.mjs",
    "sha256": "9e014019806938f2f776049a6f70e73ac65436895ef41d8127b0e459c3c86a44",
    "bytes": 186912,
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
    "at": "2026-10-08T19:30:13.710Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
