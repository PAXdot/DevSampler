// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "overlay-fx",
  "category": "ui/notifications",
  "tags": [
    "toast",
    "notifications",
    "social proof",
    "activity",
    "sales",
    "cloud",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 46,
      "out": 0
    },
    "markers": {
      "settled": 52
    },
    "beats": [
      4
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "none",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "items",
      "type": "list",
      "role": "body"
    }
  ],
  "brand": {
    "successColor": "colors.primary",
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "toast",
      "prop": "scale",
      "from": "0.9",
      "settledBy": 6,
      "easing": "ease"
    },
    {
      "target": "toast",
      "prop": "y",
      "from": "drift up",
      "easing": "linear"
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V12 toast cloud)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "items": [
      {
        "text": "Maya joined",
        "sub": "Team plan, yearly",
        "amount": "+$240"
      },
      {
        "text": "New order #4821",
        "sub": "Ships tomorrow",
        "amount": "+$86"
      },
      {
        "text": "Leo upgraded",
        "sub": "Starter to Pro",
        "amount": "+$19"
      },
      {
        "text": "Invoice paid",
        "sub": "Halcyon Studio",
        "amount": "+$1,200"
      },
      {
        "text": "Ava booked a call",
        "sub": "Thursday, 10:30",
        "amount": ""
      },
      {
        "text": "Review left",
        "sub": "Five stars, again",
        "amount": ""
      },
      {
        "text": "Noah subscribed",
        "sub": "Monthly plan",
        "amount": "+$12"
      },
      {
        "text": "Payout sent",
        "sub": "To your account",
        "amount": "+$3,480"
      }
    ],
    "count": 10,
    "seed": 7,
    "drift": 1,
    "successColor": "#16A34A",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5",
    "theme": "dark",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 12,
      "role": "body"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 4,
      "max": 14
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    },
    {
      "key": "drift",
      "label": "Drift",
      "type": "number",
      "min": 0,
      "max": 2
    },
    {
      "key": "successColor",
      "label": "Success color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Toast Cloud",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "toast-cloud",
    "bundleSha256": "3ff7ced17c1c47a32b97227a4d15bf8866c94006762c165a51e680b53f1f9d1a",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:59:23.967Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-paper.png",
        "sha256": "159105d8db6a225b16b0f3ffff250784029a8de180f0c82f7ff200d7c50a1f89"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-night.png",
        "sha256": "8e10026a224772e56a09e104ebabf07810339c5118a060c1209af757dd81795f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-color.png",
        "sha256": "4d814a4c5bb90a0657c56da2bf1bc00d0e9354e278c3af2d2a8326c660233680"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-paper.png",
        "sha256": "293481465bdda3b4856085df76a6dd968b38c6ef5a14743a10fa2df5895004e9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-night.png",
        "sha256": "c807134527ebee77161a366c09d16fcaa7ffe12e1a19acd0ec318e7f20710318"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-color.png",
        "sha256": "c7f905b1cf7d96d3e75ea7cb6692ac8e1243a207017581963d6520bb47c9f3a0"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-paper.png",
        "sha256": "a78581939aa123c6c4d308ebdf0fee4c2dee85b6765351ee47311922bbb3c973"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-night.png",
        "sha256": "ae27ef675f7ef0f0c6a8a826408b3be1c81cff22b5bbc83db6f8c9c48f41bbc9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-color.png",
        "sha256": "6f1aa81e19b6a0e88b14eeb3c467278c583b6b881edebe7bcc16fab25f0df77e"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          },
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "toast-cloud--9x16",
          "toast-cloud--1x1",
          "toast-cloud--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 132.94694010416666,
            "paperColor": 16.215928819444443,
            "region": {
              "left": 53,
              "top": 122,
              "width": 977,
              "height": 1607
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 44.461995442708336,
            "paperColor": 15.130940755208334,
            "region": {
              "left": 81,
              "top": 191,
              "width": 925,
              "height": 708
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 48.62773980034722,
            "paperColor": 11.32638888888889,
            "region": {
              "left": 124,
              "top": 207,
              "width": 1685,
              "height": 662
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0369370870776295,
            "bad": [],
            "measured": 11,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0730671110393748,
            "bad": [],
            "measured": 11,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0369370870776295,
            "bad": [],
            "measured": 11,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7638942351060224,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7957358183328203,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7638942351060224,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.740124528463649,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7623849919340165,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.740124528463649,
            "bad": [],
            "measured": 38,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.686089409722221,
        "frames": [
          7,
          52,
          149
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 36.16905381944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-60-frame-7.png",
                "sha256": "0a5fa25f721cdc61afdc23e6fd23c6c84f0cbcde4a813bfe9a15fdb29f7e4129",
                "alphaMass": 46970
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-60-frame-52.png",
                "sha256": "5e05d2f42e676963b37a3f51777795a8bf62b67e43d6b994e307b786d96ebef6",
                "alphaMass": 239549
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-60-frame-59.png",
                "sha256": "5e05d2f42e676963b37a3f51777795a8bf62b67e43d6b994e307b786d96ebef6",
                "alphaMass": 239549
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 23.068684895833332,
            "retainedAlpha": 1.4347688068998563,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-600-frame-7.png",
                "sha256": "0a5fa25f721cdc61afdc23e6fd23c6c84f0cbcde4a813bfe9a15fdb29f7e4129",
                "alphaMass": 46970
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-600-frame-52.png",
                "sha256": "9d354b626d7f068f2ce353815f83da12dd5e3b6eb5c1c52da1ec62e2eeb7a36d",
                "alphaMass": 167330
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-600-frame-528.png",
                "sha256": "bc14534b2d7e54d476b6cc6b279495011afd7162b0c8fd31f7242dae70c41af3",
                "alphaMass": 166960
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/9x16-duration-600-frame-599.png",
                "sha256": "5e05d2f42e676963b37a3f51777795a8bf62b67e43d6b994e307b786d96ebef6",
                "alphaMass": 239549
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 19.46017795138889,
            "retainedAlpha": 0.9986692557337425,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-60-frame-7.png",
                "sha256": "800b06240c89384719244f20b644ac8708849d0c8f1aab17bf9a51e7f7b08cb3",
                "alphaMass": 4293
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-60-frame-52.png",
                "sha256": "02901e7ca17718a96271e68fa94e87538c7c83f62ad510f0d4c73a89d8a2a087",
                "alphaMass": 73643
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-60-frame-59.png",
                "sha256": "af1435ee32cd6f9fe893c18f2065d9e47bbda08ce1553167b2e1dcc9687fdca8",
                "alphaMass": 73545
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 19.46017795138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-600-frame-7.png",
                "sha256": "800b06240c89384719244f20b644ac8708849d0c8f1aab17bf9a51e7f7b08cb3",
                "alphaMass": 4293
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-600-frame-52.png",
                "sha256": "02901e7ca17718a96271e68fa94e87538c7c83f62ad510f0d4c73a89d8a2a087",
                "alphaMass": 73643
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-600-frame-528.png",
                "sha256": "22d4ee13ee8ba767e49046e430d761f0b97b26e6ede4a5b5bec2baea9f263eeb",
                "alphaMass": 73621
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/1x1-duration-600-frame-599.png",
                "sha256": "22d4ee13ee8ba767e49046e430d761f0b97b26e6ede4a5b5bec2baea9f263eeb",
                "alphaMass": 73621
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 13.686089409722221,
            "retainedAlpha": 1.0007784193840579,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-60-frame-7.png",
                "sha256": "e2ac152ab9c4309e7526c22132799f1c14ccb0ea3753330a87a627486dda2aa0",
                "alphaMass": 4130
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-60-frame-52.png",
                "sha256": "c04ea9a219f05d9bcf3ee9a438704fdcc7c078b0b1a8301a683005402424004f",
                "alphaMass": 70656
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-60-frame-59.png",
                "sha256": "57cd3cca30f578d5696c4ecdf0d7249d4fa00e584b9cd05595e5e4408ecf1cdb",
                "alphaMass": 70711
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.686089409722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-600-frame-7.png",
                "sha256": "e2ac152ab9c4309e7526c22132799f1c14ccb0ea3753330a87a627486dda2aa0",
                "alphaMass": 4130
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-600-frame-52.png",
                "sha256": "c04ea9a219f05d9bcf3ee9a438704fdcc7c078b0b1a8301a683005402424004f",
                "alphaMass": 70656
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-600-frame-528.png",
                "sha256": "c4085cb7f13bd6b1ef4400fea3e216b1a86b30f1ecefe66bcc31d123b17c67e4",
                "alphaMass": 70342
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/toast-cloud/16x9-duration-600-frame-599.png",
                "sha256": "c4085cb7f13bd6b1ef4400fea3e216b1a86b30f1ecefe66bcc31d123b17c67e4",
                "alphaMass": 70342
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
        "note": "A cloud of notification toasts fills the frame; on the color brand the toast outline is heavy but brand-bound."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3ff7ced17c1c47a32b97227a4d15bf8866c94006762c165a51e680b53f1f9d1a",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.935845Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/toast-cloud/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/toast-cloud/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/toast-cloud/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "13b621ced9f8d5968fa88e5649536543e4ea8b0383c41f5cf1c637ea531761b4",
        "loop": "027db9b69a025bee823d3c2879ab4b6dc044355fd4f6ad4a58f227adc876c6be",
        "detail": "608ab71904afc71b3ab3d17ec40adf09c31ad624338319615daeb8de4becf6c2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/toast-cloud/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/toast-cloud/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/toast-cloud/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "95faeb67582c97f7629b33e462884323a5da136bbf4fdd8e934c159bb79b61d7",
        "loop": "0e70bf381c7654df8d412422a172632d16314cab76471ca287d89647ff8a6845",
        "detail": "f40542a575eab7d78507a4bf3d08ab559a4f333cd92b738e5146ee7ef58c8bd2"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/toast-cloud/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/toast-cloud/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/toast-cloud/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e224779bade63da6c824401fcae336ff12b8a2b74e92996b3dd7df19255aed50",
        "loop": "f71269fadb9fa68542f6d07703bc76e4b1221329cf0023032a5722b8207b125b",
        "detail": "aa7e165b6944716ac6959c9ad76935ded3de483b497c33d7cd2435be180effe5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3ff7ced17c1c47a32b97227a4d15bf8866c94006762c165a51e680b53f1f9d1a/index.mjs",
    "sha256": "3ff7ced17c1c47a32b97227a4d15bf8866c94006762c165a51e680b53f1f9d1a",
    "bytes": 162418,
    "externals": [
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
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:21:15.186Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
