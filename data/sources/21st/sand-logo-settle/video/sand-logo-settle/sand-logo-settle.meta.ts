// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "pouring"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "sand",
    "pour",
    "falling sand",
    "grains",
    "physics",
    "strata",
    "sand art",
    "warm light",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 170,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 160,
      "out": 0
    },
    "markers": {
      "settled": 160,
      "pour": 4,
      "spray": 30,
      "full": 112,
      "drained": 136
    },
    "beats": [
      4,
      30,
      112,
      136,
      160
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "sand",
      "prop": "fill",
      "from": "empty mold",
      "settledBy": 112,
      "easing": "linear"
    },
    {
      "target": "spill",
      "prop": "y",
      "from": "piled on the edges",
      "settledBy": 136,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 160,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (falling-sand pour that piles up inside the logo silhouette in brand-colored strata, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Built to last",
    "primary": "#F28482",
    "secondary": "#84A59D",
    "color": "#F7EDE2",
    "background": "#2B1B17",
    "strata": true,
    "grain": true,
    "fontFamily": "DM Sans"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "strata",
      "label": "Strata",
      "type": "boolean"
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Sand Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "sand-logo-settle",
    "bundleSha256": "26a4f1812ab70b8d6d4206304a157dc2fb050c00ad4e961182ca48db39b04df5",
    "sourceSnapshot": {
      "sha256": "a0bf921565e20b46119c2943b1bf56c893d63f6fe38bc741ab25e796006b7256",
      "files": 1866
    },
    "renderedAt": "2026-10-09T13:58:35.484Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-paper.png",
        "sha256": "d2b3675452efbfdbd478f29babebe31b74b6239cfeb8d5ff3eff681227a054f1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-night.png",
        "sha256": "205b356b0bb7e60b41443b1827f0f63643d3a9aba94248b8f2d0fc8ed52b6fe4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-color.png",
        "sha256": "e72f1afd2e9dfd090f41ae589d3dc910281f12e8a61e2de1481c09e3798aff4c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-paper.png",
        "sha256": "dd106844b4c64fce4853a44d73c690a8b2f190cbd67d2fc55920aae3753bdc60"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-night.png",
        "sha256": "53ca1810ec453538e1daf43964fe51c2d1f4a20587dc1cf40d9400654fe96784"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-color.png",
        "sha256": "9ee037c7c4d5822319336aaf3b7e68e08a96f4cb158ec4baf3652cb14d6c357e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-paper.png",
        "sha256": "9b8ab808c4437190d7cc6ef28cf446f44672acc27e0c881f39d347b5db41a220"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-night.png",
        "sha256": "0e3b43a326b163aa853753a373a11768f3fb064b780b8dd5b66efcfc2ff2b3e8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-color.png",
        "sha256": "6f7c28b5a9114280dad66ad75592581f3491deb2b33dbabf338678e195c41fa5"
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
          "sand-logo-settle--16x9",
          "sand-logo-settle--9x16",
          "sand-logo-settle--1x1"
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
            "paperNight": 30.269395616319443,
            "paperColor": 15.620930989583334,
            "region": {
              "left": 567,
              "top": 186,
              "width": 791,
              "height": 677
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.180908203125,
            "paperColor": 12.498372395833334,
            "region": {
              "left": 47,
              "top": 379,
              "width": 986,
              "height": 1041
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 30.84518771701389,
            "paperColor": 15.55148654513889,
            "region": {
              "left": 187,
              "top": 226,
              "width": 707,
              "height": 614
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
            "occupancy": 0.3596824773505082,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36600043020037243,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3586039691725456,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6900436116447609,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7015265114533469,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6893703983651075,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5173923135783807,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5274504920852658,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.516535703787688,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.193684895833334,
        "frames": [
          24,
          160,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 15.07302517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-170-frame-20.png",
                "sha256": "c810d22b235d63db5761040ffe25ad9896d19b3a688e840c9edeaf41eff287f0",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-170-frame-160.png",
                "sha256": "aa1b86b6d52f0b1dc7eaf3b49874965983fced44f822b865f8cef33eeac8d5f7",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-170-frame-149.png",
                "sha256": "260d1eb544a692850742ba2eb1b135fd54d935b5b83886c6a51ccc1479e63d85",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-170-frame-169.png",
                "sha256": "2f15ae3f2c8698c586cdc54c114e9f29f516838a6df9a34140f48d459d286c80",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.193684895833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-600-frame-24.png",
                "sha256": "2f96f43b7853cdc1ae61380e59635714ed47b08e93d68dad91cc542e1dd1af24",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-600-frame-160.png",
                "sha256": "aa1b86b6d52f0b1dc7eaf3b49874965983fced44f822b865f8cef33eeac8d5f7",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-600-frame-528.png",
                "sha256": "a8c29e5bba445bb20306d55586ba25f7f4bf12ac7841ef349c9570b0f04648d5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/16x9-duration-600-frame-599.png",
                "sha256": "68787b2ce8867cff422f862616075eefa7b5bdd3dfe963e5db2882eae176fc66",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 21.72992621527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-170-frame-20.png",
                "sha256": "32e370eb0589c2d4cab057bcec612d3af35c3182e4e7d676290691f01bd9a61d",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-170-frame-160.png",
                "sha256": "e3725990dc5591509e019220f15026784275292fe87ba026b66bc7f648d9d64c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-170-frame-149.png",
                "sha256": "50a0fa48b3a3f7f444253ab0490bc0ffee7a43673686c3dd478e58ac0b8f29ef",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-170-frame-169.png",
                "sha256": "36ad322b905da8c980da344b8ed82586a679bcf16803b5b1d9ae8ea7df417be7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.983506944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-600-frame-24.png",
                "sha256": "fb1485acc6a3aaeea08f15762f39c1685fcf4da96e6a100d13c22b68bf30c3f3",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-600-frame-160.png",
                "sha256": "e3725990dc5591509e019220f15026784275292fe87ba026b66bc7f648d9d64c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-600-frame-528.png",
                "sha256": "d3e3af5f74c6acb70f54b32f5d9f96ad18d78e75c68a351ab237d30ae8a95023",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/9x16-duration-600-frame-599.png",
                "sha256": "7f372764bcf1078d5073d717059c2ea8f508fdc94e5fea256e63e1eb506dd3e0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 20.594075520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-170-frame-20.png",
                "sha256": "15de2520affff292864590e3fb1560bee9fa3a8d71a6fbaabe3e2b6a8b63dc05",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-170-frame-160.png",
                "sha256": "440ed9509b69169a91f12f222b80468ea2161997a9a50a998a1305cc12786f38",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-170-frame-149.png",
                "sha256": "890581c85aea53fabd49c05bb8f051ccabcc87f1b6d373c4ed27584f5bfd922f",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-170-frame-169.png",
                "sha256": "87d4a89ca55617e404bf22ff192ffa686e2def7ec192d357df751b602ae0a2d7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 20.863606770833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-600-frame-24.png",
                "sha256": "fa48731ec6be9bb948a86610f51959d36865b2d4da18a848b50a2943da03d894",
                "alphaMass": 587520
              },
              {
                "frame": 160,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-600-frame-160.png",
                "sha256": "440ed9509b69169a91f12f222b80468ea2161997a9a50a998a1305cc12786f38",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-600-frame-528.png",
                "sha256": "c01853c296adb05f2a55897aa720dc75b1929bd460e519aad8d2e89de86c884d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-155452/sand-logo-settle/1x1-duration-600-frame-599.png",
                "sha256": "550c6cd8cab322cc43a315a8228e81166f5abcf651633d01f588ffe75fb9c76a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The title \"Sand Logo\" is visually supported by the sand-like particles composing the logo in both the settled form (image 1) and the sampled motion (images 2–4). The motion samples clearly show the gradual assembly of the logo from falling sand, matching the implied \"built to last\" narrative. No effects shown rely only on copy; the subject, structure, and animation are sand-based and logo-forming.\n\nNoBakedHeading: There is no baked-in title or category label in any composition; the only text present is the editable heading \"Built to last\" in a legitimate caption role as described by named-slot content. No decorative or non-content block-titles are present in the image designs.\n\nBrandAdherence: The final three images (5–7) show the same logo and layout with three clearly different palettes that correspond to the supplied brand palette values (background, primary, secondary, accent/text). The subject and its sharp material are preserved, shapes remain identical, and text remains legible in all three, with no fixed unexplained block colors; the brand role assignments (background as ambient field, ink for sharp subject, accent as light) are respected.\n\nLanguageAdherence: The consistent use of sans-serif type for heading/caption and numerals, the continuous, soft light fields around the sharp sand subject, the diffused gradients for background, and the slow motion with legibility across all palettes match the supplied language card. No language-inconsistent elements (e.g., unrelated palettes, UI skeletons, blurred copy) are introduced in any frame or rebrand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "26a4f1812ab70b8d6d4206304a157dc2fb050c00ad4e961182ca48db39b04df5",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T13:59:22.272Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/sand-logo-settle/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sand-logo-settle/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sand-logo-settle/16x9/detail.mp4",
      "bg": "#221512",
      "posterFrame": 160,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "fdb15e2be19889d6db558bfd11f3876cb6bb2e5ab62b4b9f7ec41ba58f096031",
        "loop": "4c18947c99a63a7e7d6cfa5bdca9757f4a59ab36189c3a89bcfd5f5686524472",
        "detail": "3ea0a5041ad69fbad3cb2a0bd22c7e9810b59ae8147c1ed9a534359bcfa5ad58"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/sand-logo-settle/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sand-logo-settle/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sand-logo-settle/9x16/detail.mp4",
      "bg": "#261815",
      "posterFrame": 160,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "16a86c32d98736698d98fe70987137ec062a0b961f93fddd5ba7463fefca5194",
        "loop": "49c55d709330e422a5fe7a7f31137ced28383a46adf3d2dccdad3a7e47f95026",
        "detail": "e58cea2510a74bcf62506e521baf4595fa9ce33a33b30c560ef04a4fef702876"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/sand-logo-settle/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sand-logo-settle/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sand-logo-settle/1x1/detail.mp4",
      "bg": "#231512",
      "posterFrame": 160,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "4e52fbe04cbf4a85a202ef16f165455f758ab234cb953327633fa659971c4509",
        "loop": "7c775ffbb9acdc879dbd0f65d7cc8110d192746149e5203b5f7c48d7fc8ebf80",
        "detail": "6506d492513ac78c30a532fddd013c4850c0b0607433ed42b5d08bec63bcece7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/26a4f1812ab70b8d6d4206304a157dc2fb050c00ad4e961182ca48db39b04df5/index.mjs",
    "sha256": "26a4f1812ab70b8d6d4206304a157dc2fb050c00ad4e961182ca48db39b04df5",
    "bytes": 175162,
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
    "at": "2026-10-09T14:02:57.227Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
