// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "job-card-assembles-then-apply"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "job-card-assembles-then-apply",
    "hiring",
    "job-post",
    "salary",
    "linkedin"
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
      "in": 114,
      "out": 0
    },
    "markers": {
      "settled": 114
    },
    "beats": [
      0,
      29,
      57,
      86,
      114
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
      "key": "role",
      "type": "text",
      "maxChars": 32,
      "role": "headline"
    },
    {
      "key": "location",
      "type": "text",
      "maxChars": 30,
      "role": "label"
    },
    {
      "key": "salary",
      "type": "text",
      "maxChars": 14,
      "role": "value"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 16,
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
      "target": "job-card-assembles-then-apply",
      "prop": "transform",
      "from": "enter",
      "settledBy": 114,
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
    "ink": "#17151C",
    "accent": "#FF5B2E",
    "secondary": "#7457D9",
    "paper": "#FBF8F3",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "role": "Senior Product Designer",
    "location": "Remote · Lisbon or Berlin",
    "salary": "€85k–€110k",
    "cta": "Apply now"
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
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "location",
      "label": "Location",
      "type": "text",
      "max": 30,
      "role": "label"
    },
    {
      "key": "salary",
      "label": "Salary",
      "type": "text",
      "max": 14,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 16,
      "role": "cta"
    }
  ],
  "name": "Job Post Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-jobcard",
    "bundleSha256": "1b11bc7549ba7553ca03a737f0b826d79b19a2243b68a5f6952af3f33d7bd382",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:47:46.759Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-paper.png",
        "sha256": "79fccb58f348f6a3175c635f0b1d6bf90746d320e95abb88182896cff8715eb0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-night.png",
        "sha256": "129732ee5bdb086b62faf66265c4686bf227856ba912665cc1b418e867ea493a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-color.png",
        "sha256": "8b4d20d7dd997c0611f25e69e86387c64db08cfa467d7386fedd098a529acd9a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-paper.png",
        "sha256": "a4568b35a33270ad00bedcdc2db5380d34c750d71be418aa7ed45b3942ea2862"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-night.png",
        "sha256": "74f0903c2b305983f4386808e3f8c3f2552bd745dfce5cc79ed43c61fdd773dd"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-color.png",
        "sha256": "1932f2a929db07f2950a42ed2af24bc30dce342bfe5b4978d49576fd3760456d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-paper.png",
        "sha256": "1279c383a0b604cd10301e7bc682435bf2b1cacd8018ee99deb24aa9ddb94e41"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-night.png",
        "sha256": "e65a6614218e36257ef730bd8ee8d13ec7358b7beb25d91bd1c2848cc35f18d4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-color.png",
        "sha256": "212a685e0cbec235c98221ae9f6abdb960cc74b23d822289f336f8639db8862c"
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
          "mg-hire-jobcard--16x9",
          "mg-hire-jobcard--9x16",
          "mg-hire-jobcard--1x1"
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
            "paperNight": 106.95795355902777,
            "paperColor": 20.51348198784722,
            "region": {
              "left": 53,
              "top": 65,
              "width": 1814,
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
            "paperNight": 120.19441731770833,
            "paperColor": 22.765706380208332,
            "region": {
              "left": 18,
              "top": 112,
              "width": 1047,
              "height": 1808
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 116.09616427951389,
            "paperColor": 19.50640190972222,
            "region": {
              "left": 28,
              "top": 54,
              "width": 1025,
              "height": 1007
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
            "occupancy": 1.2410457849549288,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2410457849549288,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2509642327867363,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2937833312337284,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2937833312337284,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2937833312337284,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2491618589594047,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2491618589594047,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2541435612882559,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.408094618055555,
        "frames": [
          17,
          114,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.511610243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-90-frame-10.png",
                "sha256": "aab7120075c4ba66747bd714768dd2ea6a981979a9a648ae57c70ee4706ac868",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-90-frame-89.png",
                "sha256": "4f297a6befd9c2495f8bf5f1345a89bb3c6be50714af647a24a070ec3ea92d76",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-90-frame-79.png",
                "sha256": "0cffb393154a1c7a1190ad58baf645d90b28caa43cd79426047ab7be7ea3273c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.408094618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-900-frame-17.png",
                "sha256": "e494e4acc798e70aad7d13b9162d74b521a017ac783fdf2838452ae748b89ef2",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-900-frame-114.png",
                "sha256": "0cffb393154a1c7a1190ad58baf645d90b28caa43cd79426047ab7be7ea3273c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-900-frame-792.png",
                "sha256": "0cffb393154a1c7a1190ad58baf645d90b28caa43cd79426047ab7be7ea3273c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/16x9-duration-900-frame-899.png",
                "sha256": "0cffb393154a1c7a1190ad58baf645d90b28caa43cd79426047ab7be7ea3273c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 16.109700520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-90-frame-10.png",
                "sha256": "a827ef22c23938a2c2d227def45d09897c42907a0431c40dc224f68a2e79cb65",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-90-frame-89.png",
                "sha256": "d6b857e218579af740600ba60f863a39896b199c19ddeb503638f46868de4084",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-90-frame-79.png",
                "sha256": "638f1303ca157ba5bddccd29cf23b29a887fab559a4a9564f286f6969929f308",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 16.232421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-900-frame-17.png",
                "sha256": "1e88ec39e08a9e012fc58979735be62cc57f029a3c2e0c25001e15f17dfd0f4c",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-900-frame-114.png",
                "sha256": "638f1303ca157ba5bddccd29cf23b29a887fab559a4a9564f286f6969929f308",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-900-frame-792.png",
                "sha256": "638f1303ca157ba5bddccd29cf23b29a887fab559a4a9564f286f6969929f308",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/9x16-duration-900-frame-899.png",
                "sha256": "638f1303ca157ba5bddccd29cf23b29a887fab559a4a9564f286f6969929f308",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.22048611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-90-frame-10.png",
                "sha256": "0e075f6388cf218874e70934f4c4241c990c8de3027c2cd793c1d2a3df67503e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-90-frame-89.png",
                "sha256": "f66b27bc8995891eecc42d5e9e8e79f4898bd6eb123fa3451ed419630ee0d838",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-90-frame-79.png",
                "sha256": "f66b27bc8995891eecc42d5e9e8e79f4898bd6eb123fa3451ed419630ee0d838",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.20779079861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-900-frame-17.png",
                "sha256": "4ba30d207866d35837224824ddb0e3e03c41f010560f0a106f1ee87945231f06",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-900-frame-114.png",
                "sha256": "f66b27bc8995891eecc42d5e9e8e79f4898bd6eb123fa3451ed419630ee0d838",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-900-frame-792.png",
                "sha256": "f66b27bc8995891eecc42d5e9e8e79f4898bd6eb123fa3451ed419630ee0d838",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-jobcard/1x1-duration-900-frame-899.png",
                "sha256": "f66b27bc8995891eecc42d5e9e8e79f4898bd6eb123fa3451ed419630ee0d838",
                "alphaMass": 587520
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
        "note": "Job post card with role, salary range, skills and an apply click; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "1b11bc7549ba7553ca03a737f0b826d79b19a2243b68a5f6952af3f33d7bd382",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.848Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/16x9/detail.mp4",
      "bg": "#e4e1dd",
      "posterFrame": 114,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "91924664b2da837b7aac9640a4db0c43a46d9018c7ec28764cbb816eee69e06f",
        "loop": "3a7d879547d8ea393fb6203ac5347c5955bee4e9d2244538a56b40fe2383f6d6",
        "detail": "b7127ad8f9b51da2e1be97a851088791754dc342ecfdc233375068d577760865"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/9x16/detail.mp4",
      "bg": "#e4e1dd",
      "posterFrame": 114,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1186bb9c6637cd03c1cfd49b985ca64381de491e9a28a742878c57efa099ff76",
        "loop": "f6e88ec11a831884c6fa4feeac2dc2ffd6c1c641c61daf7ba7522c8d78453e4e",
        "detail": "7a017a35b66bcc89ecfa8ed50c42642d1ea34794b36306737a9d71b6283622a6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-jobcard/1x1/detail.mp4",
      "bg": "#e4e1dd",
      "posterFrame": 114,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "30fa90085f83f797effec7aef3e50e12a347cbe886d56905dad2a9160c9fd0c0",
        "loop": "244a5c5cb3c3dd074c28aa7fe6497df51e940d18ba3a4480e923c36a55188dc3",
        "detail": "3effdd5bb20cc2fa51811363c7f41e8696e2c8b91b0bfee811a998834fa47234"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1b11bc7549ba7553ca03a737f0b826d79b19a2243b68a5f6952af3f33d7bd382/index.mjs",
    "sha256": "1b11bc7549ba7553ca03a737f0b826d79b19a2243b68a5f6952af3f33d7bd382",
    "bytes": 198883,
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
    "at": "2026-10-09T08:02:20.267Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
