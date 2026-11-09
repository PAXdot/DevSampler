// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "fibers"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "fiber optic",
    "fibers",
    "strands",
    "light",
    "glow",
    "pulses",
    "dots",
    "cable",
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
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150,
      "spread": 28,
      "pulses": 56,
      "lit": 118
    },
    "beats": [
      0,
      28,
      56,
      118,
      150
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
      "target": "strands",
      "prop": "length",
      "from": "inside the cable",
      "settledBy": 40,
      "easing": "ease"
    },
    {
      "target": "strands",
      "prop": "shape",
      "from": "one column",
      "settledBy": 80,
      "easing": "spring"
    },
    {
      "target": "tips",
      "prop": "glow",
      "from": "dark",
      "settledBy": 118,
      "easing": "ease"
    },
    {
      "target": "mark",
      "prop": "fill",
      "from": "dotted",
      "settledBy": 150,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 150,
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
    "sourceUrl": "21st first-party (a fiber optic bundle fans out, light pulses race to the tips and the glowing tips form the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Brought to light",
    "primary": "#FF8A3D",
    "secondary": "#FFD27A",
    "color": "#F3EEE6",
    "background": "#0E0F12",
    "density": 1,
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.5,
      "max": 1.5
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
  "name": "Fiber Optic Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "fiber-optic-logo",
    "bundleSha256": "ffb3ddd70f859d4bb99167e3729c8d3e26df6e40e8da1e369a0de1dca0bd0b7c",
    "sourceSnapshot": {
      "sha256": "e1700756587cd83df6fd32b5646cce99006e7cf10acda5740b44f04e6918be43",
      "files": 1875
    },
    "renderedAt": "2026-10-09T14:32:05.617Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-paper.png",
        "sha256": "52ac9abd8b64b90ebb3c2cfcee4716d2cb6edb83feddcd562336e63c54b802c3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-night.png",
        "sha256": "c9458c76592d2886cc80057bc4619cfacee8715885d9f21d0960341095a159c6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-color.png",
        "sha256": "86f9d3b48258478825e41a03efac9b6a76cc62dc9b291dc697194b45de06bd41"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-paper.png",
        "sha256": "ab36d15fa59bc413f900b8b7716f886deaca3e8c617c01aaae7b77f93c2d5b8d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-night.png",
        "sha256": "e106497d13ca8d91d5cdaf47cd8577d77f98c08df83fd1694521907c97c79206"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-color.png",
        "sha256": "c98766a82920a592b39e35219f285842cfb2d46b63637ad110e9a96a12c5f1f7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-paper.png",
        "sha256": "bfe214ab23daa1093bdf4db3059e4bd153709736b79b482f3c28772c8dc681b1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-night.png",
        "sha256": "768ac9df92779f3dea69a2bf757a0ebbd7043c17214c3c355b754bee8206a4ef"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-color.png",
        "sha256": "95c265bc3d6caa6ab0869f54c535867edea7c747e643504d22cd1142cab6eae6"
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
          "fiber-optic-logo--16x9",
          "fiber-optic-logo--9x16",
          "fiber-optic-logo--1x1"
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
            "paperNight": 30.48923068576389,
            "paperColor": 12.141845703125,
            "region": {
              "left": 242,
              "top": 111,
              "width": 1437,
              "height": 965
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.213948567708336,
            "paperColor": 14.349419487847221,
            "region": {
              "left": 84,
              "top": 156,
              "width": 918,
              "height": 1758
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.945339626736114,
            "paperColor": 13.310221354166666,
            "region": {
              "left": 10,
              "top": 100,
              "width": 1056,
              "height": 976
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
            "occupancy": 0.9477646913317799,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9477646913317799,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9477646913317799,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0633557531809021,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1030063066893427,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0633557531809021,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2522979013278839,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2451825723430663,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2510148092158677,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.95974392361111,
        "frames": [
          22,
          150,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 18.98383246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-170-frame-20.png",
                "sha256": "1f91eed7cfd3159fa70ffe9d24446e6db379ace9883dd846981ef255743ea5e6",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-170-frame-150.png",
                "sha256": "88f026b2cd7c2140609449a3682b96ecef17c799281844f29ad2e2682af4ff05",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-170-frame-149.png",
                "sha256": "b18b04118c502cad70d83932ffb99afad74f074a2e8f66284066ba068f4c5e89",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-170-frame-169.png",
                "sha256": "8a80c6b9e68584a646b96b621be67819d8aa632ef3b60eee513f9e48f64a0e79",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.95974392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-600-frame-22.png",
                "sha256": "f131a4c8c6067af152a00ccdcb2f4e79eea28a9159e6efa72ed239ccabf9f4fa",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-600-frame-150.png",
                "sha256": "88f026b2cd7c2140609449a3682b96ecef17c799281844f29ad2e2682af4ff05",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-600-frame-528.png",
                "sha256": "2ba82ea44df25f0dfa40e88ee508559b00097af74492397520c15f6e5b4378b8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/16x9-duration-600-frame-599.png",
                "sha256": "dfd76c0af71eb1dda35e54b1434d1ad876901e7f8daa71c2a1759d9fd572e907",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 33.644856770833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-170-frame-20.png",
                "sha256": "dadc16dba617b409de41f94599499c590e0ca51eb3572540bf32c50b011d1093",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-170-frame-150.png",
                "sha256": "3264a682d5c720b637e3918ca20a9488f9c0f996413c47830b0dbb45199a1372",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-170-frame-149.png",
                "sha256": "29f37f0a05ff7edde8eab851dbe7fc0304c12c7230b020e769435ca19e742ca8",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-170-frame-169.png",
                "sha256": "98c6e1a8723fe3c5a232197e09af2b1aecc6376ece051038260c87714d823374",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 33.361111111111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-600-frame-22.png",
                "sha256": "460dc024c6888ea79997d0d77af4242bd7fc6fe140152871e2c1b49524e9c4b9",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-600-frame-150.png",
                "sha256": "3264a682d5c720b637e3918ca20a9488f9c0f996413c47830b0dbb45199a1372",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-600-frame-528.png",
                "sha256": "91f43bef96c3f5fcf7a20714148d09f86ff0d8f446937d71f16a55d570ca206f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/9x16-duration-600-frame-599.png",
                "sha256": "2b91fbb86d020a0f2d6ee7c33a3447a862b083c17f81784ea36e7bfe34352469",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 29.8046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-170-frame-20.png",
                "sha256": "1955c3b9055bcd4b8a20d8ded47b3c084c232490e43dbfa99360245ece5c5bcb",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-170-frame-150.png",
                "sha256": "90d79ebf6c30ade317f7a145e92b6b420df037ec8512c51e16dba4bb7a15eddb",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-170-frame-149.png",
                "sha256": "76ecf85d117223d23dd97c93a8fe967748cd4e45c3fe2c378d7fa6d0b94b32b9",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-170-frame-169.png",
                "sha256": "adf9c32a5c1bb95062d0bb634a27910ecf55023378a3b49730a922721db6aa55",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 29.6796875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-600-frame-22.png",
                "sha256": "52abfccd3f61556da3190ab80e6fab204011e2ebcc7ba649e5d7822e042c6ab9",
                "alphaMass": 587520
              },
              {
                "frame": 150,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-600-frame-150.png",
                "sha256": "90d79ebf6c30ade317f7a145e92b6b420df037ec8512c51e16dba4bb7a15eddb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-600-frame-528.png",
                "sha256": "c99961991d137d6056debe53f09370e65c920642daacf9de15407d58c11b30de",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/fiber-optic-logo/1x1-duration-600-frame-599.png",
                "sha256": "6941976a7942f08b02a20f438f7ae8552187e7a5a47e45bd037a869711060770",
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
        "note": "TitleMatches: The subject is a fiber optic cable tip expanding into a two-part luminous mark, with light points and radiating lines, matching the 'Fiber Optic Logo' title. The three motion samples (images 2-4) show the logo slowly emerging or being illuminated from a fiber bundle, consistent with the processes of 'breathe', 'focus', and 'reveal'.\n\nNoBakedHeading: The only prominent heading is 'Brought to light,' which matches the named-slot content provided. There are no decorative, unexplained, or category labels.\n\nBrandAdherence: The last three images are the same design under three distinct palette treatments, accurately reflecting the brand's provided swatches (light, dark, and mid/cool backgrounds). Subject shape, material, and detail remain clear and legible in each version. There are no unexplained fixed block colors.\n\nLanguageAdherence: Visuals adhere to the language card: continuous soft atmospheric gradients fill the background ('ambient field'), the bright, clearly delineated subject is derived from sharp light points ('sharp subject'), light source and aura appear within the fiber effect, and the typography and layout remain consistent across styles and in motion. There are no forbidden elements, and type and material roles are constant in all palettes and frames."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 27,
        "compared": 27,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ffb3ddd70f859d4bb99167e3729c8d3e26df6e40e8da1e369a0de1dca0bd0b7c",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T14:33:03.293Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/fiber-optic-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fiber-optic-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fiber-optic-logo/16x9/detail.mp4",
      "bg": "#0c0d0f",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "f629b3eec4cb09648c55644ff7582c69837f584ddc5a9a3b38beead4a6e01103",
        "loop": "bc42651dde5319f3ffcaa05448277aa40859182b2631c25981e2781c7cb23664",
        "detail": "ad2df4f14515c36c744f656b1ae8aa3060ab0103af8a4ca2127321cc2b6cbb2b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/fiber-optic-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fiber-optic-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fiber-optic-logo/9x16/detail.mp4",
      "bg": "#0d0e10",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "6880ee2f01a2ae3bdd8638872525cde2c0996886f61e17004c83a055d22188c7",
        "loop": "a2eede734aa5fe8842d3ec3f12dc799eb45c13b97126d5f9043f6cfa473cd54b",
        "detail": "06ba75e00fa795b7e1c8a3e8437f3882e288a6f10e7803d6637d9f7ec1ccd50f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/fiber-optic-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fiber-optic-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fiber-optic-logo/1x1/detail.mp4",
      "bg": "#0c0d10",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "64f29b343cb6dd727258c6ed47a10b1a6bb53e0612e9f36bd18853d56b0ea286",
        "loop": "3f4fd9b74a8f1bf358765934ebed001ea433af0383f9d107f07e8064c046961d",
        "detail": "b6bf384ea27b9c874ed123cbb2ade7bc90744111298b516cfbbed2ea611c5ea9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ffb3ddd70f859d4bb99167e3729c8d3e26df6e40e8da1e369a0de1dca0bd0b7c/index.mjs",
    "sha256": "ffb3ddd70f859d4bb99167e3729c8d3e26df6e40e8da1e369a0de1dca0bd0b7c",
    "bytes": 177499,
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
    "at": "2026-10-09T14:37:23.542Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
