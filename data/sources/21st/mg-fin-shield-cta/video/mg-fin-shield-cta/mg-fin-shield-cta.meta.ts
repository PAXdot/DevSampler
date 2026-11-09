// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "aura",
  "mechanic": [
    "code-entry-shield-lock-check"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "code-entry-shield-lock-check",
    "fintech",
    "security",
    "end-card",
    "2fa"
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
      "in": 92,
      "out": 0
    },
    "markers": {
      "settled": 92
    },
    "beats": [
      0,
      23,
      46,
      69,
      92
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
      "maxChars": 16,
      "role": "name"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "body",
      "type": "text",
      "maxChars": 80,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
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
      "target": "code-entry-shield-lock-check",
      "prop": "transform",
      "from": "enter",
      "settledBy": 92,
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
    "ink": "#F1EEFF",
    "accent": "#CFF26B",
    "secondary": "#8C6EFF",
    "paper": "#1A1043",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "halcy",
    "headline": "Your money, locked tight.",
    "body": "Two-step sign-in, instant card freeze and fraud alerts that never sleep.",
    "cta": "Open an account"
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
      "max": 16,
      "role": "name"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "body",
      "label": "Body",
      "type": "text",
      "max": 80,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Security Shield CTA",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-shield-cta",
    "bundleSha256": "2e110dc74ff7b513c37aaeedd1f0d53354a006d51fabd1e40682c9632cd009d7",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:19:18.074Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-paper.png",
        "sha256": "d77993117ceb260e70b3808ccfa9065fa19f99591872746e0e57309b4713a7b8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-night.png",
        "sha256": "df8fe540d7ecb657ceecaf6c48b39baa351ce0443eb61f917a2360ac195550bb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-color.png",
        "sha256": "744cb24a9573226ceb405bda3cdd456cee435beb9ce5ff012c1086959a4b4219"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-paper.png",
        "sha256": "a7c4ad8c70f5744d8a7a53b5bc98a97e1c29d3957afe9296291325e95b888d5d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-night.png",
        "sha256": "a395a383a223a24a5326e3a137e9f1a1d487875df1e6a716f5dc7b87b0fae6c7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-color.png",
        "sha256": "19d18c28a089dc548e72ec815af58421d4c8898f2e18faf5daa64b9d49fd1d0f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-paper.png",
        "sha256": "fb883c626a81fb33fc3e737448ad87b7752e96a3767a7156a0fe8e3b64d237db"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-night.png",
        "sha256": "61fd21db10faec2436ab14d87e00c0d1547ac7783979bb404f55f096c3b1d8ee"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-color.png",
        "sha256": "c9fc1a63efe27715c1d199f6634d9aeb43b44c39f9f6de710f189702334d28f5"
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
          "mg-fin-shield-cta--16x9",
          "mg-fin-shield-cta--9x16",
          "mg-fin-shield-cta--1x1"
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
            "paperNight": 39.120524088541664,
            "paperColor": 24.41899956597222,
            "region": {
              "left": 126,
              "top": 3,
              "width": 1594,
              "height": 917
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.4306640625,
            "paperColor": 26.800048828125,
            "region": {
              "left": 66,
              "top": 134,
              "width": 920,
              "height": 1701
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 45.25371636284722,
            "paperColor": 26.329698350694443,
            "region": {
              "left": 36,
              "top": 173,
              "width": 956,
              "height": 658
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
            "occupancy": 0.9355545844881165,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9355545844881165,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9990198014648248,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9800502232142859,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9800502232142859,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0695684523809526,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7643243625753915,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7643243625753915,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7555298353909466,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.18381076388889,
        "frames": [
          13,
          92,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.184461805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-90-frame-10.png",
                "sha256": "e2c9653b83cabb9cc9a8d0bed22ac6f89d16bc74c913af877e9a85940013f4d6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-90-frame-89.png",
                "sha256": "9f16a790c217c8d7c43adf2a51ff19e09583e3493957a29767114270002e31dc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-90-frame-79.png",
                "sha256": "9f16a790c217c8d7c43adf2a51ff19e09583e3493957a29767114270002e31dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.18381076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-900-frame-13.png",
                "sha256": "7e2d455428ab61f928788fac2a69fa5dda9f6d9f6e617fe37fa95cec3265dd29",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-900-frame-92.png",
                "sha256": "9f16a790c217c8d7c43adf2a51ff19e09583e3493957a29767114270002e31dc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-900-frame-792.png",
                "sha256": "9f16a790c217c8d7c43adf2a51ff19e09583e3493957a29767114270002e31dc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/16x9-duration-900-frame-899.png",
                "sha256": "9f16a790c217c8d7c43adf2a51ff19e09583e3493957a29767114270002e31dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.8046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-90-frame-10.png",
                "sha256": "c22151a25211862a2735102e609a3a18aaaaddefb070644a787b4c4caf62ac99",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-90-frame-89.png",
                "sha256": "3034840cc3cbd4dba71c65d711d0d2a1d54e1065290922663c6a954aad4e05a7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-90-frame-79.png",
                "sha256": "aabf3cd2ddab287e04b36f81c3974a5b5c72384c738d035e9faf77ff201b7e39",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 12.80349392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-900-frame-13.png",
                "sha256": "1fdbe2b1670eb78bac1b5f555df77f1d675f7a9afb9fabc3a107534631a72c97",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-900-frame-92.png",
                "sha256": "aabf3cd2ddab287e04b36f81c3974a5b5c72384c738d035e9faf77ff201b7e39",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-900-frame-792.png",
                "sha256": "3034840cc3cbd4dba71c65d711d0d2a1d54e1065290922663c6a954aad4e05a7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/9x16-duration-900-frame-899.png",
                "sha256": "3034840cc3cbd4dba71c65d711d0d2a1d54e1065290922663c6a954aad4e05a7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.043619791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-90-frame-10.png",
                "sha256": "d470df691114a14bcee493d08a5147a5406bb972011f1b498e75f78582cc30cb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-90-frame-89.png",
                "sha256": "674c9456e025897a15436bb8b6b96c9892ed5a01805abc87c83be1842f207cb4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-90-frame-79.png",
                "sha256": "674c9456e025897a15436bb8b6b96c9892ed5a01805abc87c83be1842f207cb4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.043511284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-900-frame-13.png",
                "sha256": "a8f36fa0fc1b0cee3d17d9c74c36fd8e12ac78e6fac4b63ea916630f0d287430",
                "alphaMass": 587520
              },
              {
                "frame": 92,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-900-frame-92.png",
                "sha256": "7e56757f7a9b711ea79cc8b5bfa0b3e5b31138f57bb87227d371c85d04d4d684",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-900-frame-792.png",
                "sha256": "7e56757f7a9b711ea79cc8b5bfa0b3e5b31138f57bb87227d371c85d04d4d684",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-shield-cta/1x1-duration-900-frame-899.png",
                "sha256": "d119a6f3150927574709bf86ef8bc90f43bfc8add279efc8e7070cb5838a4de5",
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
        "note": "Shield unlocks to a check above a one-time code beside a security CTA; rebrands distinct."
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
      "bundleSha256": "2e110dc74ff7b513c37aaeedd1f0d53354a006d51fabd1e40682c9632cd009d7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.078Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/16x9/detail.mp4",
      "bg": "#180f40",
      "posterFrame": 92,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c513f5ac0d326f68b562a1e841e8d72eb3d4d1ba36018e0e1c7f9345a8d9c274",
        "loop": "1b7fa155918a74bb855a3de2cf42e0c4ec7806bc11457261f62df47ba44cb30e",
        "detail": "1d8b65463eac923d31736aeec393766de2b272883ec4b7951104b904f028df85"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/9x16/detail.mp4",
      "bg": "#180f40",
      "posterFrame": 92,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e8e13f503d33c366eb064caff171d824dd3c009112360acf0b63bf1c80ff84ac",
        "loop": "866a759c48b7a9399f9f2196b9c7d2e93523e4f2afa44434b6032705857c8942",
        "detail": "52611ba59d75cf2ded8cd49ec377602785c01e4c6e332490c434cb02ae56097d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-shield-cta/1x1/detail.mp4",
      "bg": "#180f40",
      "posterFrame": 92,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f463783333fb36f2f9f43c8e311dfab0bbb1fb1646582d030a93cdab5f0d8ffa",
        "loop": "71be466865f8c248149014cc6a1ea1e184e235ef561551a209554944531e364d",
        "detail": "cab39fc5ea4d6e219bcc9737503355e7311d5f5f06841dd7d92903e8ac627491"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2e110dc74ff7b513c37aaeedd1f0d53354a006d51fabd1e40682c9632cd009d7/index.mjs",
    "sha256": "2e110dc74ff7b513c37aaeedd1f0d53354a006d51fabd1e40682c9632cd009d7",
    "bytes": 271654,
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
    "at": "2026-10-09T07:07:18.420Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
