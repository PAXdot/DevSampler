// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "dish-slide-in-steam-rise"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "dish-slide-in-steam-rise",
    "restaurant",
    "dish",
    "hero",
    "menu"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
      "maxChars": 44,
      "role": "headline"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
      "role": "cta"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 6,
      "role": "value"
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
      "target": "dish-slide-in-steam-rise",
      "prop": "transform",
      "from": "enter",
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#1D1F2B",
    "accent": "#C93220",
    "secondary": "#34407E",
    "paper": "#F4EEE3",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Twelve hours of slow broth, one bowl.",
    "brand": "fennel. ramen counter",
    "cta": "Order for pickup",
    "price": "$16"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 6,
      "role": "value"
    }
  ],
  "name": "Steaming Bowl Hero",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-steam-bowl",
    "bundleSha256": "a0a3cfb7db69836765a69e677c4c32c7b17091fe48d988c14c8c215ead944346",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:26.243Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-paper.png",
        "sha256": "d2bfdc06f2fd813c47e854db9afebbe73a28e6b275d91cf650f09ee6b0e68664"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-night.png",
        "sha256": "48a400ddc2e9848580081e31b5aafa10426e404e3de5845855102520743e0276"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-color.png",
        "sha256": "cf9b42a76747e79ab3480a6358c47a4f8c2445a1625737d8e3881e4d3e7bb4a6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-paper.png",
        "sha256": "61bee7f9f04e0ba9bbbb9a671b65c971adfd1aa281fbd165ebfae47473ca78b3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-night.png",
        "sha256": "20261fac9a9e86700caafa32016c40121401ed37830b0a7d7f613e3755fd7cb2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-color.png",
        "sha256": "42f503ba597cf06f5fe6aab68316ed2a221db4c31593a71260fbba95e4c6a7c2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-paper.png",
        "sha256": "9837387dfca63d685061814a357489d3d969eccf460c3eb5d2b153b8b9aac657"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-night.png",
        "sha256": "a1843254c074714b4aa73f6af426daf6e0a553eb61c96e573b4c736bf7daf656"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-color.png",
        "sha256": "8c55237e605a6253c9d62cc3042b10e272aa4acc3b863e7a0b246e86d9634a81"
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
          "mg-food-steam-bowl--16x9",
          "mg-food-steam-bowl--9x16",
          "mg-food-steam-bowl--1x1"
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
            "paperNight": 42.465983072916664,
            "paperColor": 14.92578125,
            "region": {
              "left": 120,
              "top": 16,
              "width": 1800,
              "height": 1020
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.568332248263886,
            "paperColor": 19.003282335069443,
            "region": {
              "left": 77,
              "top": 173,
              "width": 1003,
              "height": 1629
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.38707139756944,
            "paperColor": 15.62155490451389,
            "region": {
              "left": 67,
              "top": 76,
              "width": 1013,
              "height": 1004
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
            "occupancy": 1.2548422146636435,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2548422146636435,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2548422146636435,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1167050008660875,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1167050008660875,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1167050008660875,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2357683699908864,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2357683699908864,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2357683699908864,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.95041232638889,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.16970486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-90-frame-10.png",
                "sha256": "d76a4706afa473050212acf1f086b0078c72d681ec005fd215648dc960292831",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-90-frame-89.png",
                "sha256": "d821c6f1f53d8d7b516e23a152da695b65d8a51190abe6f59bb46ac2b1a81cab",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-90-frame-79.png",
                "sha256": "d821c6f1f53d8d7b516e23a152da695b65d8a51190abe6f59bb46ac2b1a81cab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.95041232638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-900-frame-19.png",
                "sha256": "503b2a5b7fc41c2bd6f5d3ac752a1e50d603106dd6f8b472c4432c9db2c2cfb3",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-900-frame-132.png",
                "sha256": "c4e0a256abeade41a3d501e04f010f35290449205bd9ce80f939b62851f45df5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-900-frame-792.png",
                "sha256": "c4e0a256abeade41a3d501e04f010f35290449205bd9ce80f939b62851f45df5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/16x9-duration-900-frame-899.png",
                "sha256": "c4e0a256abeade41a3d501e04f010f35290449205bd9ce80f939b62851f45df5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 13.288519965277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-90-frame-10.png",
                "sha256": "d59bad69ef23e7fd89322cc787d7b9a782db96c882c3d7b2f438ade3a51cf67c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-90-frame-89.png",
                "sha256": "2304ac1276c342fe3676f2d35b95930b7dc380543af2ade7444b84e6b18066c4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-90-frame-79.png",
                "sha256": "41681297a256352ff91c5e4220b7d6905588e5ff6c3067cd9c57c3799ffb509d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.126627604166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-900-frame-19.png",
                "sha256": "63140471c4a41854b8b92a3f7eba4663dfe7e9f45287910a525b889aafdb60ba",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-900-frame-132.png",
                "sha256": "2304ac1276c342fe3676f2d35b95930b7dc380543af2ade7444b84e6b18066c4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-900-frame-792.png",
                "sha256": "41681297a256352ff91c5e4220b7d6905588e5ff6c3067cd9c57c3799ffb509d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/9x16-duration-900-frame-899.png",
                "sha256": "41681297a256352ff91c5e4220b7d6905588e5ff6c3067cd9c57c3799ffb509d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.743272569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-90-frame-10.png",
                "sha256": "c7b13689c092feb3b8aa7575f7ea03d2a5514499c0f56621ae9d48f7f9fb474f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-90-frame-89.png",
                "sha256": "16e2c9494add51fc06de63becb81b0c4b1c6d8e66b9d7c7f10336eaf91932179",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-90-frame-79.png",
                "sha256": "85efb5c609251f2aae4060095608abe8fa7003e070ac5479cec91fad04d94bb3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.517686631944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-900-frame-19.png",
                "sha256": "d98b9c431df16b91b04aaed6306cb15dfbab57cbd8f0dd0173a1e801c515e64f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-900-frame-132.png",
                "sha256": "85efb5c609251f2aae4060095608abe8fa7003e070ac5479cec91fad04d94bb3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-900-frame-792.png",
                "sha256": "16e2c9494add51fc06de63becb81b0c4b1c6d8e66b9d7c7f10336eaf91932179",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-steam-bowl/1x1-duration-900-frame-899.png",
                "sha256": "16e2c9494add51fc06de63becb81b0c4b1c6d8e66b9d7c7f10336eaf91932179",
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
        "note": "Steaming ramen bowl beside a flowing serif headline and order CTA; no overlaps in any brand."
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
      "bundleSha256": "a0a3cfb7db69836765a69e677c4c32c7b17091fe48d988c14c8c215ead944346",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.088Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/16x9/detail.mp4",
      "bg": "#f3ede2",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b01c5c0aba2c86f3525a3e5bfc15f29e276d6e18706fbeb3638e0c285f9a70d0",
        "loop": "0acc928a6844fc5e39db9db9b31a6961ded29ca6077a40ae04eef94cdba5b624",
        "detail": "92fe8ef7f4c14354254995db9c603d4eaec088765e1612a546921e89c07e315e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/9x16/detail.mp4",
      "bg": "#f4ede3",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6f7027d431e3039398d82cbb9594a682d71b061055407f136716ae2cf94d958d",
        "loop": "c29c39d72fa41afa01bd789adf503d4bf2695b75b993c254c4dc38695f91cac9",
        "detail": "f01d64a960f8d4b3466bdb35c8f73183c66b07c6d60e7621db66c1058e8df857"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-steam-bowl/1x1/detail.mp4",
      "bg": "#f3ede2",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "99ada08c8a256397fc7f2becae7d89108e8b7f81e8dad25bc719efe15aebd1e8",
        "loop": "521c2f2a12aef827609a43dafffdc77d84ab11dd6c7d0b3e277bb662f3d33ce8",
        "detail": "a9eec3d1f5e451f73322068196d50998375716505147287fb8ca45e87cfa44e7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a0a3cfb7db69836765a69e677c4c32c7b17091fe48d988c14c8c215ead944346/index.mjs",
    "sha256": "a0a3cfb7db69836765a69e677c4c32c7b17091fe48d988c14c8c215ead944346",
    "bytes": 203979,
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
    "at": "2026-10-09T07:13:38.094Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
