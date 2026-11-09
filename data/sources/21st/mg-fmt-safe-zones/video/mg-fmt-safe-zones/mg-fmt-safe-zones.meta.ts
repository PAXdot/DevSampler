// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "platform-ui-ghosts-over-safe-area"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "platform-ui-ghosts-over-safe-area",
    "social",
    "safe-area",
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
      "key": "kicker",
      "type": "text",
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 28,
      "role": "label"
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
      "target": "platform-ui-ghosts-over-safe-area",
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
    "ink": "#F3ECD8",
    "accent": "#C8F560",
    "secondary": "#4FD1A5",
    "paper": "#0D3427",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen 2.0 · out now",
    "headline": "Your whole team, one workspace.",
    "badge": "key content in safe area"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 28,
      "role": "label"
    }
  ],
  "name": "Safe-Zone Feed Check",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fmt-safe-zones",
    "bundleSha256": "67767e97566ea3032dd0712d07937fb798cf0a5af47e4136841a0820e95fdd48",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:42:17.326Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-paper.png",
        "sha256": "d6771917fcfc8d12d65a32c632080ff8eac5324053bd433751fc2696faf68494"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-night.png",
        "sha256": "8980e6e7d324b296fa494316e901139069378b21ff0de289c56b4a6ab8034376"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-color.png",
        "sha256": "ab2d966e737ed04337df101946c8cc89e2917b06900366137f94c4dce06152ba"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-paper.png",
        "sha256": "1231d3cc457b43a1d8277c369aba979043c042f88f809dfd1d899c0eec316439"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-night.png",
        "sha256": "7b34696cc6a971fce045a1bf72c2518bcec154ec8bc3b1bf55be8049bc44520a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-color.png",
        "sha256": "3c40ab3dc100c740239c0ab2a6d3320c5f726d5985202d115876be6c9c75103f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-paper.png",
        "sha256": "43e9a86989c551b3ae1db03587c43362af2bdf71eba46d886db07fc8691e4512"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-night.png",
        "sha256": "b2818aaaa70ed3ce115c683bc7b79e03d7990ef86ded26a7cd7e781d4fe84a5b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-color.png",
        "sha256": "91691de456b41fb347d8c7770886034eb59f41b42ddcf074fb248d2b372f430e"
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
          "mg-fmt-safe-zones--16x9",
          "mg-fmt-safe-zones--9x16",
          "mg-fmt-safe-zones--1x1"
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
            "paperNight": 15.796305338541666,
            "paperColor": 10.255072699652779,
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
            "paperNight": 20.05512152777778,
            "paperColor": 15.15964084201389,
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
            "paperNight": 15.166395399305555,
            "paperColor": 9.66550021701389,
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
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.21213107638889,
        "frames": [
          20,
          138,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.550889756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-90-frame-10.png",
                "sha256": "82502eefd9db68eb44277984de4e1e94d24b61ffab0459edd601bfa3f1c8770e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-90-frame-89.png",
                "sha256": "b9306ec4f08a71d3396177fc7e5155c564f23f13cc67983b2d5d03e561ab499b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-90-frame-79.png",
                "sha256": "b9306ec4f08a71d3396177fc7e5155c564f23f13cc67983b2d5d03e561ab499b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.21213107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-900-frame-20.png",
                "sha256": "b8b99bab6dc5448e04c4c3bc9e370e49a2c645fb10d191dab4314e0499f2e39b",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-900-frame-138.png",
                "sha256": "b9306ec4f08a71d3396177fc7e5155c564f23f13cc67983b2d5d03e561ab499b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-900-frame-792.png",
                "sha256": "b9306ec4f08a71d3396177fc7e5155c564f23f13cc67983b2d5d03e561ab499b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/16x9-duration-900-frame-899.png",
                "sha256": "b9306ec4f08a71d3396177fc7e5155c564f23f13cc67983b2d5d03e561ab499b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 23.370442708333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-90-frame-10.png",
                "sha256": "c566f5037f369cc6dc9b68ff43571606d117c44d3e08e5a472a18fed2ce19611",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-90-frame-89.png",
                "sha256": "d4c60b56246ba9c015aadf8e666feb620d2ab00eafe8275a176d755c40ef7782",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-90-frame-79.png",
                "sha256": "d4c60b56246ba9c015aadf8e666feb620d2ab00eafe8275a176d755c40ef7782",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 21.393880208333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-900-frame-20.png",
                "sha256": "b767715323cc360d5671b93784c640ebe26b823342c8f105d588e9ca0a5276bb",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-900-frame-138.png",
                "sha256": "d4c60b56246ba9c015aadf8e666feb620d2ab00eafe8275a176d755c40ef7782",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-900-frame-792.png",
                "sha256": "d4c60b56246ba9c015aadf8e666feb620d2ab00eafe8275a176d755c40ef7782",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/9x16-duration-900-frame-899.png",
                "sha256": "d4c60b56246ba9c015aadf8e666feb620d2ab00eafe8275a176d755c40ef7782",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 15.931098090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-90-frame-10.png",
                "sha256": "5b1a1b7b1e5ebe53ac1034de9d34e220733c3969eebb05687932b820134f48ad",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-90-frame-89.png",
                "sha256": "3acd687e553b7e913a8dda8eb3467bbb064319c62ed7d879db0e91a5a698f85c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-90-frame-79.png",
                "sha256": "92924bfa368eea112749a52ec2093073271822cdb64163f51a98d88f46db3006",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 14.184678819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-900-frame-20.png",
                "sha256": "d9badd873bfb48dd1ccb664fc811da10a804fc8ac01c9b4b7cc5e433f6a3ae55",
                "alphaMass": 587520
              },
              {
                "frame": 138,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-900-frame-138.png",
                "sha256": "92924bfa368eea112749a52ec2093073271822cdb64163f51a98d88f46db3006",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-900-frame-792.png",
                "sha256": "3acd687e553b7e913a8dda8eb3467bbb064319c62ed7d879db0e91a5a698f85c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-fmt-safe-zones/1x1-duration-900-frame-899.png",
                "sha256": "3acd687e553b7e913a8dda8eb3467bbb064319c62ed7d879db0e91a5a698f85c",
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
        "note": "Feed safe-zone overlay with a launch card; card readable in every brand, headline follows brand ink."
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
      "bundleSha256": "67767e97566ea3032dd0712d07937fb798cf0a5af47e4136841a0820e95fdd48",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/16x9/detail.mp4",
      "bg": "#423e33",
      "posterFrame": 138,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3cb119bb58014139f8af5a8d0bacdf7697788b2bc8209621bfba7a001e526619",
        "loop": "01a69cf3b42a41efc1781ab6932182bf29b869fad608636a554a9e74d22398a2",
        "detail": "ffc64349265d5ccf2d9111bc8efbd6f69cf3d08b3f74939cb41b5aab6c48ae3b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/9x16/detail.mp4",
      "bg": "#423e33",
      "posterFrame": 138,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "67ede55334330ed4d81f3a397ed9ce8d81c83ce0199913b0fdfc2c9f4a6eb44a",
        "loop": "2374bf269af9ae3659a31f9109de7720923521d43d3390fbcef4c2ab8a6112f8",
        "detail": "994b1a72d77437d0557129ae9d3ab312f9055730bef55a89f49899401b9b5cce"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fmt-safe-zones/1x1/detail.mp4",
      "bg": "#423e33",
      "posterFrame": 138,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a7c26c8e7deecbd051dcd1a0a4d0ead166f8a7242652720b3a04e324026f502a",
        "loop": "698450ec285f01b1ed1551dbc36b91b5822fe5e4daa8b68e910d01adc0368d4a",
        "detail": "bde677a3c2d4e1d0cb649c6fe3020f6397dd978b76d72c09355c608e3b5227e2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/67767e97566ea3032dd0712d07937fb798cf0a5af47e4136841a0820e95fdd48/index.mjs",
    "sha256": "67767e97566ea3032dd0712d07937fb798cf0a5af47e4136841a0820e95fdd48",
    "bytes": 195034,
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
    "at": "2026-10-09T03:55:42.886Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
