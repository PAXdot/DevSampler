// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "role-marquee-behind-cta"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "role-marquee-behind-cta",
    "hiring",
    "end-card",
    "roles",
    "marquee"
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
      "in": 87,
      "out": 0
    },
    "markers": {
      "settled": 87
    },
    "beats": [
      0,
      22,
      44,
      65,
      87
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
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 44,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 26,
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
      "target": "role-marquee-behind-cta",
      "prop": "transform",
      "from": "enter",
      "settledBy": 87,
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
    "ink": "#F2F2EE",
    "accent": "#CFFF45",
    "secondary": "#FF5B2E",
    "paper": "#0B0B0D",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Wayfold",
    "headline": "12 roles open.",
    "sub": "One of them has your name on it.",
    "cta": "Apply at wayfold.jobs"
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
      "max": 18,
      "role": "label"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 44,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 26,
      "role": "cta"
    }
  ],
  "name": "Open Roles End Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-rolescta",
    "bundleSha256": "f2d8af20ca39101f6c7a6910d61913d64eb68072924bfcb68127f8d8056c6d33",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:03:59.330Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-paper.png",
        "sha256": "04da4d1e39414c97f2b03dc9596f0c2b5745297e39d927c19a2a7d3db0eaa6f9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-night.png",
        "sha256": "4bca2ffe289340769c8528cca2a6915ca4c69c0784c2ce05bfcf8a21a8c06687"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-color.png",
        "sha256": "0f2962c81f4118214e3accdeeb7feb582219a75a4cfcd94bde570f30fafe74f0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-paper.png",
        "sha256": "be7faed17febb363e4edff8aa5dce47246ea0093a8c5dd1d99b6ed30861ab94a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-night.png",
        "sha256": "7cbf03093577f113a82a14596986735ff67d89bed04c4d5b69af45e71dffc3c8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-color.png",
        "sha256": "db09a5786201ce08d1475570f4da1284d76726d7113a98085e3fce789d7160f1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-paper.png",
        "sha256": "a0d882aa8a84e3b7a8eeabb2d0dc2fd290b162981c100041efd3a0291d97aab1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-night.png",
        "sha256": "21f1e42e0b3c0f8fba36af76648027015f21521af24f36f3e8b27eb6c36245af"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-color.png",
        "sha256": "f902695789c5a5770c6d3961f7e6ed19e63b4c3494f841e922b3521add043395"
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
          "mg-hire-rolescta--16x9",
          "mg-hire-rolescta--9x16",
          "mg-hire-rolescta--1x1"
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
            "paperNight": 153.603515625,
            "paperColor": 16.54709201388889,
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
            "paperNight": 149.50835503472223,
            "paperColor": 21.285319010416668,
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
            "paperNight": 150.09895833333334,
            "paperColor": 18.71091037326389,
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
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.0830078125,
        "frames": [
          13,
          87,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.047743055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-90-frame-10.png",
                "sha256": "6a3a16ab6ea36ef3c268f3f7bf4a7140b55341f52f0360cc0bd5a9095455c6b6",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-90-frame-87.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-90-frame-79.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-90-frame-89.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.0830078125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-900-frame-13.png",
                "sha256": "dcba78700fcc98d135cd06d1a1b022be86f31b3b9f194f74e44a6c36620b10a4",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-900-frame-87.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-900-frame-792.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/16x9-duration-900-frame-899.png",
                "sha256": "879364bcc48cf3932d110de6fef520a80a102e23969d7e71601792ae6b2715af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.40451388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-90-frame-10.png",
                "sha256": "1a3f948214493e7a0f9ab7f6a2898eeff76cfc7933740095c8666dca6b387a2c",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-90-frame-87.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-90-frame-79.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-90-frame-89.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.435872395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-900-frame-13.png",
                "sha256": "f0e273b7cbd951e419055c389330604131cddfaef89af6a70ab7c0ab97a097e9",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-900-frame-87.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-900-frame-792.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/9x16-duration-900-frame-899.png",
                "sha256": "b7b90a65319e6b3aa7fd80248c8add258ed8bdb1a592d05e38654a514c023b85",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.546440972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-90-frame-10.png",
                "sha256": "5ea076e4f2995dc1827f6ac7e9cb5851016f67b5546cc17ec6910e58550b0370",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-90-frame-87.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-90-frame-79.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-90-frame-89.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.552625868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-900-frame-13.png",
                "sha256": "46b02b1148d3aed079f3744b47447ea3fd2bfa84e1b4b8539ca8b15ea26bb693",
                "alphaMass": 587520
              },
              {
                "frame": 87,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-900-frame-87.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-900-frame-792.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-rolescta/1x1-duration-900-frame-899.png",
                "sha256": "7fd47cfa70de0f6f81326318e1e1413c13d67a4f7c86189234f5c20eed5d7a5d",
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
        "note": "Open-roles end card over tilted role pills with an apply CTA; rebrands distinct."
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
      "bundleSha256": "f2d8af20ca39101f6c7a6910d61913d64eb68072924bfcb68127f8d8056c6d33",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.092Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/16x9/detail.mp4",
      "bg": "#0b0b0c",
      "posterFrame": 87,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "06519d2307a29db17c8cd7e897a73697408f3703d1f9b659b486ad4a9c2a2de1",
        "loop": "9bd57c29ee49ee53fdaf1785ceacdb93063649eff7a6834b684d425f6a0a4e81",
        "detail": "ef0e95126f5c0d1b7ee6a8e63066f1ba30d127051dbf6e2d78068d5416753723"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/9x16/detail.mp4",
      "bg": "#0a0a0d",
      "posterFrame": 87,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0a0efc198a2ce7b0c42ceb5dac50357ebcf2e272cdf1b72e027d71edde865377",
        "loop": "4beea2322fc5d6bd26b7b04eda12ef0e8df964006ef1011afde84e01d19c2800",
        "detail": "08edacbd8971995a1913e9b049ed4ec0cd45b6d033d10f65f3d35b49406054f0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-rolescta/1x1/detail.mp4",
      "bg": "#0b0b0c",
      "posterFrame": 87,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a819fdcbe3d7b1d268b35e805857d11e9301dd739147e1d37bad2229eee96cee",
        "loop": "8471e6a9c98ecfe56d7f95c292b1ada76b8dd2b99a4d3c3c95c53c2f77e148ac",
        "detail": "f52a9299bce9aba61c13e6b84a536bf5672054fd1abfbed57734da4e8457453e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f2d8af20ca39101f6c7a6910d61913d64eb68072924bfcb68127f8d8056c6d33/index.mjs",
    "sha256": "f2d8af20ca39101f6c7a6910d61913d64eb68072924bfcb68127f8d8056c6d33",
    "bytes": 198157,
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
    "at": "2026-10-09T07:15:58.970Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
