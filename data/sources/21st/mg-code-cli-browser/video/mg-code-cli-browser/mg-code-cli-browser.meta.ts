// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/motion-gallery",
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "terminal-deploy-to-live-site"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "code",
    "terminal-deploy-to-live-site",
    "deploy",
    "terminal",
    "cli"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "key": "command",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "toast",
      "type": "text",
      "maxChars": 28,
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
      "target": "terminal-deploy-to-live-site",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#D7E5DF",
    "accent": "#3EF0A6",
    "secondary": "#E0561F",
    "paper": "#040A08",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "command": "lumen deploy --prod",
    "headline": "Notes that write themselves.",
    "toast": "Deployed to production"
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
      "key": "command",
      "label": "Command",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Terminal To Live Site",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-code-cli-browser",
    "bundleSha256": "905d113454351cb0b84cc0135ea4da1c201ff9fe721d9ed4cf7f6bf84979394c",
    "sourceSnapshot": {
      "sha256": "1f6ce6492f581e3c8c64310c021d09e41636a62ca2784e1de4c2e9015f49ad94",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:30:57.623Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-paper.png",
        "sha256": "301527df3f2693c55fab18394b9971562d851cee1eb63b900a570cddc46280db"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-night.png",
        "sha256": "48a004fc3a63d1bd723722cfcb839207139348f23e0e42ec83a794269b178612"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-color.png",
        "sha256": "be4d178772168afb90429ecf404c13543d85f8c62c7a659ac49d3f66073699ce"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-paper.png",
        "sha256": "a3ba77c7c81ae0773a8da554c68937dd35d8f5d47e1b124d9eb81dc426708cc7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-night.png",
        "sha256": "6bd2d4aab36bb72b88bdf8457b7e07cc2c9bd580ac2fe96a869877e0f9baddf0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-color.png",
        "sha256": "cba4f50c7a72b2e687594e7926e2173f530868b15afb2ee9453c033bcafe03ca"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-paper.png",
        "sha256": "6dbe2b0f3b32fdb4e9075194ab75c19b28e8f9689cce64aa371bc98dc22a32a9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-night.png",
        "sha256": "2bd2473ea4f32c37877d6fcab2a067321ade36ee78b75ee29087ea143caff35f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-color.png",
        "sha256": "3278307eb8ec478b4a89432348b5327b3b0f8ea61c51fd90e5416f4f57f61c9c"
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
          "mg-code-cli-browser--16x9",
          "mg-code-cli-browser--9x16",
          "mg-code-cli-browser--1x1"
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
            "paperNight": 41.05023871527778,
            "paperColor": 5.927110460069445,
            "region": {
              "left": 12,
              "top": 92,
              "width": 1908,
              "height": 988
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 61.39417860243056,
            "paperColor": 7.498291015625,
            "region": {
              "left": 0,
              "top": 130,
              "width": 1080,
              "height": 1702
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 44.915608723958336,
            "paperColor": 6.455539279513889,
            "region": {
              "left": 92,
              "top": 50,
              "width": 898,
              "height": 1030
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
            "occupancy": 1.2884030927185692,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2884030927185692,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2884030927185692,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2563184996220713,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2563184996220713,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2563184996220713,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1238477444018304,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1238477444018304,
            "bad": [],
            "measured": 22
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1238477444018304,
            "bad": [],
            "measured": 22
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 63.553385416666664,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 63.5517578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-90-frame-10.png",
                "sha256": "d798362e8bf0e23fdc19c20079f79c34817a8f7d864158777d7d5035f9667c5c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-90-frame-89.png",
                "sha256": "3cdcaf40bf8fe69a0789e44082ce1266ec11dcdd9aea17c8e5447fb3dc0c05b2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-90-frame-79.png",
                "sha256": "3cdcaf40bf8fe69a0789e44082ce1266ec11dcdd9aea17c8e5447fb3dc0c05b2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 63.553385416666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-900-frame-13.png",
                "sha256": "f53114a3a92f4ba958709ba8745fc7cbbcd0c53e261ba128748845dd851b4b9f",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-900-frame-93.png",
                "sha256": "3cdcaf40bf8fe69a0789e44082ce1266ec11dcdd9aea17c8e5447fb3dc0c05b2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-900-frame-792.png",
                "sha256": "3cdcaf40bf8fe69a0789e44082ce1266ec11dcdd9aea17c8e5447fb3dc0c05b2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/16x9-duration-900-frame-899.png",
                "sha256": "3cdcaf40bf8fe69a0789e44082ce1266ec11dcdd9aea17c8e5447fb3dc0c05b2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 55.946072048611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-90-frame-10.png",
                "sha256": "29f10bacd1d1d192017554dbefa949027a9dbcace291df3bcadc4002933b4000",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-90-frame-89.png",
                "sha256": "c3ef1b2e6027ceb208b93f79462b083db2074fd3beefab450c3ffd9fe99e3f17",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-90-frame-79.png",
                "sha256": "c3ef1b2e6027ceb208b93f79462b083db2074fd3beefab450c3ffd9fe99e3f17",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 55.93315972222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-900-frame-13.png",
                "sha256": "8b5ac1992e4d7a0c804225750fa260396025b46156829b9f8566a80229d59a8e",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-900-frame-93.png",
                "sha256": "c3ef1b2e6027ceb208b93f79462b083db2074fd3beefab450c3ffd9fe99e3f17",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-900-frame-792.png",
                "sha256": "c3ef1b2e6027ceb208b93f79462b083db2074fd3beefab450c3ffd9fe99e3f17",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/9x16-duration-900-frame-899.png",
                "sha256": "c3ef1b2e6027ceb208b93f79462b083db2074fd3beefab450c3ffd9fe99e3f17",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 60.93077256944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-90-frame-10.png",
                "sha256": "90c419efd68d63e91196d99bea145e6242e2edfa6d43b669be09d84eedae62e0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-90-frame-89.png",
                "sha256": "b726d73ef8301a0ecfb2689bfda38345a0d9b6383309b7cefd96b1c36f715e9a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-90-frame-79.png",
                "sha256": "b726d73ef8301a0ecfb2689bfda38345a0d9b6383309b7cefd96b1c36f715e9a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 60.92133246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-900-frame-13.png",
                "sha256": "6af627fe1bb65ce74329a2120935cb93c7229a175c1f6da2da5337589fd41890",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-900-frame-93.png",
                "sha256": "b726d73ef8301a0ecfb2689bfda38345a0d9b6383309b7cefd96b1c36f715e9a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-900-frame-792.png",
                "sha256": "b726d73ef8301a0ecfb2689bfda38345a0d9b6383309b7cefd96b1c36f715e9a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-a/mg-code-cli-browser/1x1-duration-900-frame-899.png",
                "sha256": "b726d73ef8301a0ecfb2689bfda38345a0d9b6383309b7cefd96b1c36f715e9a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A deploy command runs in a terminal and the live site renders in a browser beside it."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "905d113454351cb0b84cc0135ea4da1c201ff9fe721d9ed4cf7f6bf84979394c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.511Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/16x9/detail.mp4",
      "bg": "#081d15",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7883582612c327fb0ffe934d45ef87a47876edb9a04a63e1fc300bd7d6fd82c7",
        "loop": "3b2c400e59511507c20550f4a359fac066bd7bc91ec6e7c757b1cdfe920c7bdb",
        "detail": "ac5838e894286138d0f0760f9410252c28aade5047b9d0e3eed84026b8405409"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/9x16/detail.mp4",
      "bg": "#081d15",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1677b1bcb88938ab39872f0d874c208c46839c6bb1f40979e939b346e45f9858",
        "loop": "880143025ef967612d1037d35fb77b4c9db70b1794a435ce1c3e40ad3ef510e7",
        "detail": "3fc9105816a18295e7e33b8f34bfd217648e9706b988ec4a8b254ad58404c2c2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-cli-browser/1x1/detail.mp4",
      "bg": "#081d15",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4793946dda56334161cf1f4ccea358b1581069d16a41d97d45e7c6c4c18b62bf",
        "loop": "a4b5cb4053e99bc28c334f3ddac37223e108271c54d1652423b07fa112409663",
        "detail": "671b44ba18f7fc8484788200d08559c425e871c9b3b044b764a97af467b1de9f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/905d113454351cb0b84cc0135ea4da1c201ff9fe721d9ed4cf7f6bf84979394c/index.mjs",
    "sha256": "905d113454351cb0b84cc0135ea4da1c201ff9fe721d9ed4cf7f6bf84979394c",
    "bytes": 174497,
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
    "at": "2026-10-08T19:31:08.112Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
