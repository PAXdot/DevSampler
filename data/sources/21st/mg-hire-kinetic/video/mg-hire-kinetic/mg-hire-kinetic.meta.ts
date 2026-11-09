// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "echo-word-and-role-reel"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "echo-word-and-role-reel",
    "hiring",
    "kinetic",
    "reel",
    "careers"
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
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 14,
      "role": "value"
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
      "target": "echo-word-and-role-reel",
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
    "ink": "#F5EFE4",
    "accent": "#FF5B2E",
    "secondary": "#FFD066",
    "paper": "#0F0E13",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Wayfold",
    "headline": "we're hiring.",
    "role": "designers",
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
      "max": 22,
      "role": "headline"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 14,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 26,
      "role": "cta"
    }
  ],
  "name": "We're Hiring Kinetic",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-kinetic",
    "bundleSha256": "0ae0ea319ec03866132102a74681c59de9b4754cabccb919e16148813d5ce67f",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:47:42.630Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-paper.png",
        "sha256": "080d6da981e7621811c1d40e0848d909559b368ab823f2bc3c7cadea4e08606c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-night.png",
        "sha256": "8f26178f2e2e0bc8324d01a1b05ab36674662da1ca1f78741baba727b7ad4a3c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-color.png",
        "sha256": "d69fefa83a7dbe3394193c51c2952981ebbf255b4f19d263205a18ee2d7263ec"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-paper.png",
        "sha256": "19e25e2e15b1f5622bdcc4701f1014417c536634ee7325b3f4799c42a9e85d4f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-night.png",
        "sha256": "5d1e1f1923b60f9516cedab95eaebb8f944f4ad887f1e6f641501b1c184a4fe5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-color.png",
        "sha256": "31be6f4d42443f001fc60649c00128b88efd2464e8ebe7b95c2d80221fc3f87b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-paper.png",
        "sha256": "11290f0517afa237fe3f9c12df6bceaacd630f2acb78505694560b5c9c9f2587"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-night.png",
        "sha256": "a4fed6ab0099665fd538eaf615259cf0d780d6ab210c85fd573e8d7346b5f1c7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-color.png",
        "sha256": "afb328abab8a30d92ddc523f2ab376748f7397d6731cdc90e7c5a44d0eb7fd21"
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
          "mg-hire-kinetic--16x9",
          "mg-hire-kinetic--9x16",
          "mg-hire-kinetic--1x1"
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
            "paperNight": 36.20716688368056,
            "paperColor": 22.332655164930557,
            "region": {
              "left": 106,
              "top": 83,
              "width": 1706,
              "height": 901
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.07118055555556,
            "paperColor": 26.190999348958332,
            "region": {
              "left": 66,
              "top": 88,
              "width": 966,
              "height": 1746
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.11078559027778,
            "paperColor": 22.78173828125,
            "region": {
              "left": 60,
              "top": 71,
              "width": 961,
              "height": 944
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
            "occupancy": 1.0476121309506314,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0499427474822236,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0505585496801604,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1515637794469642,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1515637794469642,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1520968823486186,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0999598742103154,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1011263215848757,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0999380033220423,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.993272569444445,
        "frames": [
          17,
          114,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.974283854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-90-frame-10.png",
                "sha256": "bef1ddf001412d1552dd327fe36b8564a0c1255f102068b34d2a59691ce5b108",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-90-frame-89.png",
                "sha256": "a16ee2f78f3c6fbc9e1efb5fd9e4f8cac63af9c33f75e429e4153a1bf10dd096",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-90-frame-79.png",
                "sha256": "00ea3d34dcf1856881d8ec0a5f5a41a2a58b4a7b2b31a3d9273a558061a9f48a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.993272569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-900-frame-17.png",
                "sha256": "72a5e1155ab602d1bf45f2d34befc535b10dcc58b14f464cf8c730ba584d50e9",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-900-frame-114.png",
                "sha256": "10e5a406a5d01fb3bae950c2a306a7ab826153b64049424db27eaf24aade8e5b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-900-frame-792.png",
                "sha256": "b3b01824e5bfa4b1b982d3d50539ecc85ff9bee2e9d5785c43e8cd693cf54cd9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/16x9-duration-900-frame-899.png",
                "sha256": "10e5a406a5d01fb3bae950c2a306a7ab826153b64049424db27eaf24aade8e5b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 18.72601996527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-90-frame-10.png",
                "sha256": "8ec261036a8b33b3b4de76b22560f45c6154632edb771c420568829b82528ca7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-90-frame-89.png",
                "sha256": "971856028149cc2f64a3ff5bb73b520ff852e7228b25f2c2f32708626554323b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-90-frame-79.png",
                "sha256": "44479b52aa7b1ce6ea6673fc3c36d8d299de6c6c6abeb24f7d0621e21e2639cf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 18.82964409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-900-frame-17.png",
                "sha256": "239a5c1009ad2360b87d6d4d252feecbf49473779c4595e11a210aa4862016b4",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-900-frame-114.png",
                "sha256": "c2a562405630501557033cb1481da25df209719022acef960de9ec78fd8306ba",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-900-frame-792.png",
                "sha256": "7e1052f068654fd56e5dfea68adcc1662b5911083f5ffcb65ded48a7b0b6bf95",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/9x16-duration-900-frame-899.png",
                "sha256": "90ad2ccdc07ec3f6f064919719542e23d45fa409aa9bf159612f9ae782ca225a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 22.338975694444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-90-frame-10.png",
                "sha256": "2b1ffed5c5f4d35260f60b21af7157ae2c0e1fb1445923164ab8eeed11e68508",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-90-frame-89.png",
                "sha256": "5912761206103dd51e6a786793dfd5a1a02d0f8c0a9889bc86f260638ba5905f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-90-frame-79.png",
                "sha256": "5912761206103dd51e6a786793dfd5a1a02d0f8c0a9889bc86f260638ba5905f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 22.408854166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-900-frame-17.png",
                "sha256": "c0c8aabcd6f489add75210cce23bfe7d9050ef80df4c3d813bde8247d3a597b9",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-900-frame-114.png",
                "sha256": "5912761206103dd51e6a786793dfd5a1a02d0f8c0a9889bc86f260638ba5905f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-900-frame-792.png",
                "sha256": "5912761206103dd51e6a786793dfd5a1a02d0f8c0a9889bc86f260638ba5905f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-hire-kinetic/1x1-duration-900-frame-899.png",
                "sha256": "5912761206103dd51e6a786793dfd5a1a02d0f8c0a9889bc86f260638ba5905f",
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
        "note": "Kinetic hiring headline with echo lines beside a role card, badge and apply CTA; rebrands distinct."
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
      "bundleSha256": "0ae0ea319ec03866132102a74681c59de9b4754cabccb919e16148813d5ce67f",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.848Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/16x9/detail.mp4",
      "bg": "#120f13",
      "posterFrame": 114,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3f301afe2186bf5b3d665c0005fe2a55555a8fdeb6ce72f6c0741714686f6781",
        "loop": "e2424d87eecb60944084ed6f8e20b2de4ecfc7547ecbfc5ee32e0d3d26014444",
        "detail": "2be5517d82f8d8b4a9f46f22cca2ff46a63610fac5b2761d7143c34b56825e6a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/9x16/detail.mp4",
      "bg": "#0e0d12",
      "posterFrame": 114,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dcb36d0d12435a5408f8f2a2d987d17f7fc6c2188dedf5f86ec946766d933270",
        "loop": "fc4dbf29193848ebac7a32cf008b11a7c9007a49a4f900612b3ed3e197dd7a6c",
        "detail": "50675614d29498d8d1b3e7f3d042600f5aa5ee037c46e4475f350b85dbc94de9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-kinetic/1x1/detail.mp4",
      "bg": "#0e0d12",
      "posterFrame": 114,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cea3a586d4bff17c37cca020b039756b5dde12f25d1bea975b45328e173d47b3",
        "loop": "10eda65e57170d3d0d0f3b8335cf813951bc5678e2331527f20bf249d167817d",
        "detail": "d6ec2e21747b675938189475c92878c7c0b7b8ee12d2e93cad077d8e381aadd5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0ae0ea319ec03866132102a74681c59de9b4754cabccb919e16148813d5ce67f/index.mjs",
    "sha256": "0ae0ea319ec03866132102a74681c59de9b4754cabccb919e16148813d5ce67f",
    "bytes": 183646,
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
    "at": "2026-10-09T08:02:29.376Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
