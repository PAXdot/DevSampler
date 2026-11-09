// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "tape-slam-countdown"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "tape-slam-countdown",
    "sale",
    "countdown",
    "promo"
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
      "in": 84,
      "out": 0
    },
    "markers": {
      "settled": 84
    },
    "beats": [
      0,
      21,
      42,
      63,
      84
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
      "key": "word1",
      "type": "text",
      "maxChars": 7,
      "role": "headline"
    },
    {
      "key": "word2",
      "type": "text",
      "maxChars": 7,
      "role": "headline"
    },
    {
      "key": "offer",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
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
      "target": "tape-slam-countdown",
      "prop": "transform",
      "from": "enter",
      "settledBy": 84,
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
    "ink": "#F7F5F0",
    "accent": "#D7FF3A",
    "secondary": "#FF3D8B",
    "paper": "#140A10",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "word1": "flash",
    "word2": "sale",
    "offer": "up to 50% off",
    "cta": "shop the sale"
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
      "key": "word1",
      "label": "Word 1",
      "type": "text",
      "max": 7,
      "role": "headline"
    },
    {
      "key": "word2",
      "label": "Word 2",
      "type": "text",
      "max": 7,
      "role": "headline"
    },
    {
      "key": "offer",
      "label": "Offer",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Neon Flash Sale",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-flash-sale",
    "bundleSha256": "584c40e5d8a7ea6e473b8da83e8e811068b7aab82ba883515e4c15d5813843f2",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:12.407Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-paper.png",
        "sha256": "9463e2a75a671943d1684850f4a718058ad27e961f95dd04420b4e8079d54357"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-night.png",
        "sha256": "6b72c96347a74f1cf74ab0ef61543aaeaa80266cc8d42304ef9876bcf80b3310"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-color.png",
        "sha256": "347edc8384c0e7c26655ba63dbaef7e1b04822717b343095edea8df69a59e03c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-paper.png",
        "sha256": "6d2d74b7e929935f57c857a24ffbdf767c2ba4b55a3788ff8aa085456d3b7eed"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-night.png",
        "sha256": "3fd154f474ce4b5a41175814b18dbb2caeda5fb7fb31b6c720edda7441b3a435"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-color.png",
        "sha256": "f290d5cbafda42b2bd26877e4ea9cfb16b021b69a0b1bba5c95057da956a699d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-paper.png",
        "sha256": "658baa2bde71531488fd6643a07d0129abbd8e17f729bc03755854bacd1f04d3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-night.png",
        "sha256": "1f8e90a880ce544a0714701324385f6aec6bacd43af4f5f5b025a93143539de3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-color.png",
        "sha256": "c748c17a0047577a67c41ccee70c4dbcb0be8fe3cf378a187f881ad8ab40891e"
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
          "mg-shop-flash-sale--16x9",
          "mg-shop-flash-sale--9x16",
          "mg-shop-flash-sale--1x1"
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
            "paperNight": 29.206787109375,
            "paperColor": 22.421305338541668,
            "region": {
              "left": 0,
              "top": 2,
              "width": 1920,
              "height": 1078
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 26.542833116319443,
            "paperColor": 20.52294921875,
            "region": {
              "left": 0,
              "top": 47,
              "width": 1080,
              "height": 1775
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 25.44089084201389,
            "paperColor": 19.346082899305557,
            "region": {
              "left": 0,
              "top": 12,
              "width": 1080,
              "height": 1019
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
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3102029006046867,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3102029006046867,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3094647581254728,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3358738557151257,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3358738557151257,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.337186109011506,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 41.059895833333336,
        "frames": [
          12,
          84,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 42.593967013888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-90-frame-10.png",
                "sha256": "ac85a63885f2c2b3c610d4935b2227f65e6acb8bf5a14693285ba44589caf6f8",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-90-frame-84.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-90-frame-79.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-90-frame-89.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 41.059895833333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-900-frame-12.png",
                "sha256": "f5923b7ecd08657d70c6b4889f4704bb481d6825c3adf8f21e4cc50ca839928a",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-900-frame-84.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-900-frame-792.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/16x9-duration-900-frame-899.png",
                "sha256": "7bb628e07aa099e306277f60ad24b77c48f04a4fa737aff975a59cbc65bb60c4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 42.384440104166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-90-frame-10.png",
                "sha256": "e018b91a77589951d77a2444e0806659e308a45c7c37f3979dfa64cd2ff76647",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-90-frame-84.png",
                "sha256": "bd3261976c3752995924764883e2a947f6a52b5d6b184b0df8d367266c4ce21e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-90-frame-79.png",
                "sha256": "8ac26ee714405e001207fa69eea2505cca3fb1cd565e74debbc2800a49c74cb5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-90-frame-89.png",
                "sha256": "46d1ae7c6a46489d41fdfbdb58d85cad818ffc227d84c25d5cb7a51bdf2f3045",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 40.653537326388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-900-frame-12.png",
                "sha256": "348e1d4a0e756c4d74676d8f9ff1f7a1ee5d26fe4595170d1051ef5671d0d894",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-900-frame-84.png",
                "sha256": "55aded062c733c930e9982356fafc69c8fbf5f12cff0caa58e48cb4e99aa308e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-900-frame-792.png",
                "sha256": "7e26cde87669b60cf717ac1e79725a7098df43450a0bea84a20ec308ee02d1cb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/9x16-duration-900-frame-899.png",
                "sha256": "09d87e33269d896cd5c6696325226eab485b2b5a162f19cedaf7f8ef37caf7df",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 41.90440538194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-90-frame-10.png",
                "sha256": "373d3477637787cf6afd09eb960d4e8445e33456d562a66572932e3c62dcd72a",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-90-frame-84.png",
                "sha256": "66a790f9012744c03e50c78cdb08f554c4c3367d13ad1ca5cbedcfc4132bdf0c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-90-frame-79.png",
                "sha256": "c04ae155775b41ffe3a05bb07e0d7cf66d17a392f8f161eff33b723e56a9f996",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-90-frame-89.png",
                "sha256": "dd0a4fbfd6ba5c81395e071030b9339bc01e91b30de2efa9fa168369755ef3a8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 39.978732638888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-900-frame-12.png",
                "sha256": "57ec6cfd809d082761306c534e7b13190e1133f5134bfccd41303bb940d3bd20",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-900-frame-84.png",
                "sha256": "aabf5e294a45f74f1026cb34cd28c416643fc98f4bd603a4afa7805eed757401",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-900-frame-792.png",
                "sha256": "62a90db77155180fad5e837d18fc0d5757022db8b3ef1424fabb1b440ebbe8da",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-flash-sale/1x1-duration-900-frame-899.png",
                "sha256": "0f133f3aecb0fa21c82eac87cbc5dbea9c6218b4eb653410197df41bcf23d828",
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
        "note": "Neon flash-sale type with tilted tapes, a sneaker and a countdown; rebrands distinct."
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
      "bundleSha256": "584c40e5d8a7ea6e473b8da83e8e811068b7aab82ba883515e4c15d5813843f2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.087Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/16x9/detail.mp4",
      "bg": "#0f070c",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "27c8a8f330ebcfee4e6a0593eb878d71c8d02ccebd4dfc69c7b09508b150665f",
        "loop": "3e791a04c7a0ba6700aa679a496419df0f6d131df1b51174bb77a11b18636c4b",
        "detail": "c7d699feec3ae87c3159a07382f325a7a4ccc8d9bef1965249c0e2d20d58d86c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/9x16/detail.mp4",
      "bg": "#0f070c",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8829a5e4292e6aeaea702c0146568ecf67ec2c1921474eddd90db7d5058d09fc",
        "loop": "8a8a901d1db6b3d40d80a3e9a159e37ac38b13de7623b0818f47ecead8a821ba",
        "detail": "da6d4c984bf2d0123b064f58d7b5e62fb23be441c5820f86602529e69c82fc23"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-flash-sale/1x1/detail.mp4",
      "bg": "#0f070c",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "45b6df3a0cec52748b69ec43a3d7d36f258c0064b5bfffece676fb2999953823",
        "loop": "b50cfe0221cf26198e73bbb3bcdc4a9f5d932c9ff520c65265650f0365a5c4d3",
        "detail": "da30d3fc54441d949df2e8a3efa63cfe5e49b80d587162888d2249cb413d89e5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/584c40e5d8a7ea6e473b8da83e8e811068b7aab82ba883515e4c15d5813843f2/index.mjs",
    "sha256": "584c40e5d8a7ea6e473b8da83e8e811068b7aab82ba883515e4c15d5813843f2",
    "bytes": 304194,
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
    "at": "2026-10-09T07:12:56.407Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
