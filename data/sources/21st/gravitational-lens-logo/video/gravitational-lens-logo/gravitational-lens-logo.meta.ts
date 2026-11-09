// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "lensing"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "space",
    "stars",
    "einstein ring",
    "gravitational lens",
    "physics",
    "cinematic",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 132,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 128,
      "out": 0
    },
    "markers": {
      "settled": 128,
      "lens": 8,
      "ring": 86,
      "logo": 92
    },
    "beats": [
      0,
      8,
      64,
      86,
      92,
      112
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
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "lens",
      "prop": "position",
      "from": "off-frame right",
      "settledBy": 92,
      "easing": "ease"
    },
    {
      "target": "einstein ring",
      "prop": "radius",
      "settledBy": 104,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "focus",
      "from": "blurred, doubled",
      "settledBy": 118,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 128,
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
    "sourceUrl": "21st first-party (point-mass lens bends a starfield into an Einstein ring around the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Coming into focus",
    "primary": "#5EE7DF",
    "secondary": "#F7B267",
    "color": "#F1F5F9",
    "background": "#04070B",
    "density": 1,
    "strength": 1,
    "grain": true,
    "fontFamily": "Geist"
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.3,
      "max": 1.6
    },
    {
      "key": "strength",
      "label": "Strength",
      "type": "number",
      "min": 0.7,
      "max": 1.25
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
      "brand": "fonts.heading"
    }
  ],
  "name": "Gravitational Lens Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "gravitational-lens-logo",
    "bundleSha256": "79a7f9b71652d674aa4ed1d60450e3edee1a7383d0e4a8cbeac10c11a48a9ad9",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T07:59:37.683Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-paper.png",
        "sha256": "8685a99bb34a8ae4d41cf5582ca65187620dea5808b698c3d68ac16e14dd0556"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-night.png",
        "sha256": "61316214364b4f72bb117be08dff8cd91697babdf8d9170950f0f825504bebf7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-color.png",
        "sha256": "8ba8bbc89bb930c802f95955b76b26a40d70a4ce38019820109e58397f305440"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-paper.png",
        "sha256": "407e8cf24066119f04812b2bb9e113a781836ea9207d4372c222e1c354f34d55"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-night.png",
        "sha256": "0fdb823b588514a6b3f62ed74c61b8defb41edb8df5b1cf51c7f5a51404a0170"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-color.png",
        "sha256": "2ce3e874fed9723a44e9dd83eb957cb2d161c83793d348475651effb90ca460e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-paper.png",
        "sha256": "d8a20b13cc5076b569d9c385193e399ff2d054b95c475eab8a4e51b742d65ee2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-night.png",
        "sha256": "92dc8dd72d28848695d530bba96e41ec0cf149b732523171a3849c56e396c24f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-color.png",
        "sha256": "9eb6ec1d0c815323438421418d37d1a3e34259f0bbca2018aca46a9e12c9ce5c"
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
          "gravitational-lens-logo--16x9",
          "gravitational-lens-logo--9x16",
          "gravitational-lens-logo--1x1"
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
            "paperNight": 38.629313151041664,
            "paperColor": 17.850938585069443,
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
            "paperNight": 40.426025390625,
            "paperColor": 19.06572808159722,
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
            "paperNight": 36.730984157986114,
            "paperColor": 16.688829210069443,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1078
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
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4146090534979427,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.10720486111111,
        "frames": [
          19,
          128,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 132,
            "averageChannelDifference": 12.09494357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-132-frame-15.png",
                "sha256": "0e8ec1cda66f7b6fb86fe363aa270fc5035b574aa0452cdfe3cd4744e21f2c0a",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-132-frame-128.png",
                "sha256": "7f48bec1d4d0bd568533804eeb3a2299d98fcd082bbc5c04f6182d4d55c72b01",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-132-frame-116.png",
                "sha256": "8887c2008b817501b6b5db8b5812516f1ea9b954b8a060e6f27ceb52b39634f9",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-132-frame-131.png",
                "sha256": "411bc3435a7fab2b6f0c7bf7e42990e470cfc01803bafcbb3407c5fc57ccbd2b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 12.10720486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-600-frame-19.png",
                "sha256": "0dd9a2ca622f5ab65f7f45c2fe9842bf1df0348c72e62f9ef9ba4263c4ee8306",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-600-frame-128.png",
                "sha256": "7f48bec1d4d0bd568533804eeb3a2299d98fcd082bbc5c04f6182d4d55c72b01",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-600-frame-528.png",
                "sha256": "b68f3121815401d33b0380ea7f534239504c3160f688017e36b6e1ec757dd60d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/16x9-duration-600-frame-599.png",
                "sha256": "9c0b15e6d52eeaf514f10e6d33794acd78d4b9a43ac9cdb350790d74fb9e09d8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 132,
            "averageChannelDifference": 19.262369791666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-132-frame-15.png",
                "sha256": "d94caac7d97b6d7e3e585fca9a243fecbcf903a21d5287326ef39710716144a5",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-132-frame-128.png",
                "sha256": "a6c9ab14db97df5fd1199834116f9e153960f1b2159ccec3ad89217dc396a86c",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-132-frame-116.png",
                "sha256": "bc5a6d9b073f98ae632a12fc2462dc5114d7e11191dab7b5d62dc642eb5f8d2d",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-132-frame-131.png",
                "sha256": "ad192ec3e39ecc03a794a122bc85ae92a485009732ff36f1ce011bec224a03f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 19.31499565972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-600-frame-19.png",
                "sha256": "d3727f3c4ae4b0df299e1d370bb7ef8c8cd822c2cd6ad55cf20067dadb1532be",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-600-frame-128.png",
                "sha256": "a6c9ab14db97df5fd1199834116f9e153960f1b2159ccec3ad89217dc396a86c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-600-frame-528.png",
                "sha256": "2ddade7710c705af2fcfd9c404d72e843bc0718c3ee5fbbbca9c7e23923af57d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/9x16-duration-600-frame-599.png",
                "sha256": "5b79745f239f7e657bb2bdc3e6b9fc35bdfc20ecff0e0292d045e1e109ace965",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 132,
            "averageChannelDifference": 22.240125868055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-132-frame-15.png",
                "sha256": "5235c45ebe66b38b0dec5f66fc112d30b77f84c60b1c831fcfa42487da3e7fde",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-132-frame-128.png",
                "sha256": "a5d39e503b35c6574ab9451005fd5f68ba9c88f77da01f630ae7541cb5cfb427",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-132-frame-116.png",
                "sha256": "2ace2919915fc97bfb39f004588b8b72b685afa466b21ddf87b633ec331c5aa0",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-132-frame-131.png",
                "sha256": "ed3f6a2bb7a599d0a4830ba60a8887cffec5e62f90ca78804e99b936dcb7c262",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 22.16156684027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-600-frame-19.png",
                "sha256": "1fb62b282643c91c94ef60eae69a66cde19e6d458e0bd3c80a683007501c92d7",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-600-frame-128.png",
                "sha256": "a5d39e503b35c6574ab9451005fd5f68ba9c88f77da01f630ae7541cb5cfb427",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-600-frame-528.png",
                "sha256": "118393ac59c5f5a2816c8560aceb451d34f2d1b7f4d424725ae3b5a2d7b3c6ab",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/gravitational-lens-logo/1x1-duration-600-frame-599.png",
                "sha256": "6fea6d394ef035a2e63397d520da2140d4e3de09425c3a0b46d92055aa40ed24",
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
        "note": "TitleMatches: The first four images show a gradual emergence of a sharp, central, lens-like logo (representing the 'Gravitational Lens Logo') surrounded by a glowing ring that appears to correspond visually with gravitational lensing, as seen in astronomical phenomena. The second image, with the ring faded and stars diffused, suggests a focusing effect as the logo comes into view in the next frames, supporting 'Coming into focus' and explicitly matching the language card's description of focus, soft fields, and a sharp, settled subject. NoBakedHeading: Across all images, there are no decorative or unexplained headings. The visible caption 'Coming into focus' directly matches the named-slot content, and is consistent in role and placement. The typography is part of the design, not an extraneous decorative or block label. BrandAdherence: The last three images display the logo and focus effect under three different brand palettes as described: a light background with muted purples, a dark mode with violet hues, and a softer green/blue variant. The logo and field remain legible and shape-consistent in all palettes, adapting colors to backgrounds without unexplained residual colors, and each palette matches an entry in the evidence. LanguageAdherence: The typography (sans-serif, consistent between versions), numerals (none present, but no evidence of inconsistency), motion/field drift, and atmospheric gradient style visibly match the language card under all rebrands and throughout the focus sequence. There is no departure from the described material or brand roles, and the type, motion, and palette usage all adhere closely to the provided card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 16,
        "compared": 16,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "79a7f9b71652d674aa4ed1d60450e3edee1a7383d0e4a8cbeac10c11a48a9ad9",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.547Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/16x9/detail.mp4",
      "bg": "#04080b",
      "posterFrame": 128,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4ad4dd6f7eb6c5fe4395036597d11ee042755e367e21cbce3c8529bd76a8c5a0",
        "loop": "ab474ce346d52f9fea372b49f1ccad970a736bdb629d16792985726b3db2b809",
        "detail": "fc5d2b6fd0171db122c4c349364557bae8afd0f501074914bbb67c75b205c9cb"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/9x16/detail.mp4",
      "bg": "#04090c",
      "posterFrame": 128,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "84a1442e24cd6cd754723db2f39c6dbe01609e1773ef6676e8c5914b517c3566",
        "loop": "a94ac5a9e1cf774d60a93ebdfcee435097c7cd45fc415cf0124e73b789accde4",
        "detail": "150eefbced6d4bd5c9fba040d1eae56c164ba3c96ebdaa7707cea95a8639b938"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gravitational-lens-logo/1x1/detail.mp4",
      "bg": "#04080c",
      "posterFrame": 128,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5cac30642b9c8f6f7bb2fadcd72962413b1f5e9dd7d7f860ca9f09e9f56a4a10",
        "loop": "a6fd0310c365de5f271b210de1fb1f65fb81dad73a8893a7cd404b5345e05490",
        "detail": "31d146e56ded3957a8dad5fee6ee51f0c5307ab8b3e0f82cfb4524020aada120"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/79a7f9b71652d674aa4ed1d60450e3edee1a7383d0e4a8cbeac10c11a48a9ad9/index.mjs",
    "sha256": "79a7f9b71652d674aa4ed1d60450e3edee1a7383d0e4a8cbeac10c11a48a9ad9",
    "bytes": 170468,
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
    "at": "2026-10-09T09:02:27.677Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
