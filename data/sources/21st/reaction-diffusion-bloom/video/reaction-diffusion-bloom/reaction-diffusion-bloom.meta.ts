// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "growth"
  ],
  "energy": "calm",
  "tags": [
    "logo",
    "logo reveal",
    "reaction diffusion",
    "turing pattern",
    "gray-scott",
    "generative",
    "organic",
    "coral",
    "fingerprint",
    "simulation",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 190,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 178,
      "out": 0
    },
    "markers": {
      "settled": 178,
      "seed": 2,
      "spread": 26,
      "full": 118,
      "recede": 120
    },
    "beats": [
      0,
      2,
      26,
      118,
      120,
      178
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
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "logo",
      "prop": "opacity",
      "from": "0",
      "settledBy": 16,
      "easing": "spring"
    },
    {
      "target": "seed line",
      "prop": "trace",
      "from": "top of the logo",
      "settledBy": 24,
      "easing": "ease"
    },
    {
      "target": "pattern",
      "prop": "growth",
      "from": "logo edge",
      "settledBy": 118,
      "easing": "ease"
    },
    {
      "target": "pattern",
      "prop": "recede",
      "from": "frame edge",
      "settledBy": 178,
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
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (Gray-Scott reaction-diffusion grows from the logo silhouette and recedes into a ring, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "primary": "#FF8A3D",
    "secondary": "#FFD27A",
    "color": "#F3EEE6",
    "background": "#0E0F12",
    "pattern": "fingerprint",
    "rings": 3,
    "grain": true
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
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
      "key": "pattern",
      "label": "Pattern",
      "type": "select",
      "options": [
        "fingerprint",
        "labyrinth"
      ]
    },
    {
      "key": "rings",
      "label": "Rings",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Reaction Diffusion Bloom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "reaction-diffusion-bloom",
    "bundleSha256": "244d63babcf78aad37eeb4c29900f4d376f7f87f6498581c322e9dbbb33fb6d2",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:23:55.969Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-paper.png",
        "sha256": "f0c0eb67a1a005a7cebd7d4247d897811f990afe85113a1546a0da96a423a4bc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-night.png",
        "sha256": "5ed9c45b2cb6cc1cf4bd4dec67c1ac163695ac45ddc453a56aad711ee533801a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-color.png",
        "sha256": "20e55c01357a1174e4ea194cfd3071c2d1f6f50f171574d600cfbf34f33446bb"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-paper.png",
        "sha256": "24281dca28bd45a3b1a70e2ba711fa0e903ee666258bd76f0e97f527fada7c3c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-night.png",
        "sha256": "25f149516eea6e7ad496ab8e8391e14ef67735f556c5bdc27d7aa3d8a3eac0e0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-color.png",
        "sha256": "a99cce165e5331658d32caa7904c112541fd0a847edba1c25802e66d1f8db2d5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-paper.png",
        "sha256": "6d777234999a672a55dddfc1576309fb6e069e23d815ec0902425b53473cf1f6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-night.png",
        "sha256": "4331abe769d40e0392f219ad50e99daae48dee4c1674f36d565b37a21ebf7449"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-color.png",
        "sha256": "f9ef8a5f0664522abc97b03dfd39a8f8aa1244e3f637ca88c881a041becc84cc"
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
          "reaction-diffusion-bloom--16x9",
          "reaction-diffusion-bloom--9x16",
          "reaction-diffusion-bloom--1x1"
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
            "paperNight": 45.93077256944444,
            "paperColor": 15.849175347222221,
            "region": {
              "left": 440,
              "top": 78,
              "width": 1040,
              "height": 927
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.937038845486114,
            "paperColor": 14.9296875,
            "region": {
              "left": 0,
              "top": 458,
              "width": 1080,
              "height": 1004
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 46.10704210069444,
            "paperColor": 14.035454644097221,
            "region": {
              "left": 86,
              "top": 131,
              "width": 909,
              "height": 820
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
            "occupancy": 0.575235117516657,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6589151864449485,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.575235117516657,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6460694569108509,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7410950491307636,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6460694569108509,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.794841542012324,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9056734833851238,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.794841542012324,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 16.93771701388889,
        "frames": [
          26,
          178,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 190,
            "averageChannelDifference": 16.01247829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-190-frame-22.png",
                "sha256": "0ba60acf05372b0adc2e50d1f994a1d68423fc425f8a098823c838b323fdbb9e",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-190-frame-178.png",
                "sha256": "ec42522c0d8bc84a78ed9d78c0410b857b4fd071bf2f39bcee3db80f9691678c",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-190-frame-167.png",
                "sha256": "32e584785058d8385cb3f9c4c1d1cfcac713724bf1a03375195ecfc07b3cdf2d",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-190-frame-189.png",
                "sha256": "c68d0d7484695ebf26fd62b1ce8f519bebdd244f193e029ec51891163edb9340",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 16.93771701388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-600-frame-26.png",
                "sha256": "f3331f5c8e1dd23768f5a3e66cceb43768b5d1f6561f77b960dfc36aac875b19",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-600-frame-178.png",
                "sha256": "ec42522c0d8bc84a78ed9d78c0410b857b4fd071bf2f39bcee3db80f9691678c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-600-frame-528.png",
                "sha256": "b99998b7c5319c2381d8c173602d8ac8052a59ca818716f0385faf4d34f97a2d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/16x9-duration-600-frame-599.png",
                "sha256": "c1fce52245563099c6aa27e273ab9110f456213756f63cc1dae7f88283ae5dee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 190,
            "averageChannelDifference": 18.0234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-190-frame-22.png",
                "sha256": "cf784c2f50b149ca1e659bc03845c5b985fb8895fea5c489cea3dfce68885b47",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-190-frame-178.png",
                "sha256": "9a57046d502187daf70ec84d02c5cf2f719f223fc11c6243ab342eb47c41bca0",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-190-frame-167.png",
                "sha256": "074700845ada87f62880b824014ac4fa0336bdede1afd908de3e798766fc079c",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-190-frame-189.png",
                "sha256": "6defcd7b2d10feb4388ae04837ca21d83566179b0c3f42b5e02af9e98be270aa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 18.874131944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-600-frame-26.png",
                "sha256": "efb89144e2dd4105af73e4cda3e0c05fec050a142d92f843f3d1470498bceadf",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-600-frame-178.png",
                "sha256": "7f54aae0de143d34edde842c4284a91cbb7b7776c0a624a6a371d63bad986393",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-600-frame-528.png",
                "sha256": "234bf310fc68cf3c2eda0247775c6061b55179797cf296a147afbebd3c4d32bd",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/9x16-duration-600-frame-599.png",
                "sha256": "eac9a21817bfb74b255dbdb6840fc2bcb310fceeb774e5e4147dee270e61c8ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 190,
            "averageChannelDifference": 21.827039930555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-190-frame-22.png",
                "sha256": "9bed03dd6601200ecc43c4eac0485f5687100fef0a3cc55103592356e2ec79ce",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-190-frame-178.png",
                "sha256": "3ffea717f1b4d4a2ce5f4032beb4885ed3a7adf5771cb6cfd7a4b1c5e975d737",
                "alphaMass": 587520
              },
              {
                "frame": 167,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-190-frame-167.png",
                "sha256": "314006c8b46e382a26585fdf38af34e480c81c063cd9a2e6cd3379911b88cd07",
                "alphaMass": 587520
              },
              {
                "frame": 189,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-190-frame-189.png",
                "sha256": "3f8ca09ad992ff65b3efc2a94210e551ce4b4bb68704321fb50f041b1cb9ef20",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 22.86859809027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 26,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-600-frame-26.png",
                "sha256": "a5bbe4381137b03a13572eeec4d7b15f192f46c46b095297c56d812d2aac7512",
                "alphaMass": 587520
              },
              {
                "frame": 178,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-600-frame-178.png",
                "sha256": "3ffea717f1b4d4a2ce5f4032beb4885ed3a7adf5771cb6cfd7a4b1c5e975d737",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-600-frame-528.png",
                "sha256": "c082a926ef89d653e6669f3e9bd9c0381269d61522ce9c30fe3b9b93e4532b3b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/reaction-diffusion-bloom/1x1-duration-600-frame-599.png",
                "sha256": "3a33b52aa5c9134d0b7febada61e55baed90ffde0b6dd8e289b4ea49446be42e",
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
        "note": "TitleMatches: The central motif is a sharp, isolated subject surrounded by multiple concentric, organic contours that pulse and morph across the first four images. The motion sequence (images 2-4) supports reaction-diffusion or bloom-like expansion and contraction, fitting the 'Reaction Diffusion Bloom' title visually; the changing field follows the language card's 'breathe, focus, reveal' verbs and atmospheric nature.\n\nNoBakedHeading: No decorative, unexplained text or categorical heading is baked into any of the compositions. All text and shapes belong to the main visual subject, not labeling.\n\nBrandAdherence: The final three images (5-7) correspond to the expected palettes, each rendering the core design with changed field and accent colors, backgrounds, and maintaining both subject legibility and shape/material. The rebrands visibly employ the supplied palettes (#8262ac on light, #ca4a5a/#a681cd on dark, #70467a/#98658e on light green), and no unexplained fixed block coloring is in evidence. All three palette rebrands are present and clear.\n\nLanguageAdherence: The subject, smooth contour fields, and type roles remain fully consistent with the language card's roles and motion guidance. There is always a sharp central motif with diffused/gradient ambient fields; the field and aura function as described. No UI skeleton or rainbow palette appears. The visual presentation maintains consistency, supporting the language card guidance for 'display' and 'body' (both sans if present), and numerals (none appear but wouldn't contradict)."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 19,
        "compared": 19,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "244d63babcf78aad37eeb4c29900f4d376f7f87f6498581c322e9dbbb33fb6d2",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.830Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/16x9/detail.mp4",
      "bg": "#0d0f12",
      "posterFrame": 178,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "4aa7f17183558bd4bc42662346f7ea85ac4ed81e5bf9f15e8ec2d73577ab1265",
        "loop": "8bdaf2a18ab10eb5a26d27d2a2e9095a863a1758e20f89ea352e35e2aa259b65",
        "detail": "4d05c0f288d6ce72626aeb3ab1984a3c017c25c997034dcb9445d79fdbf3f228"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/9x16/detail.mp4",
      "bg": "#0d0f12",
      "posterFrame": 178,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "2f108fdff636a12de5df8cd2adc56cc9d67bbd42b430f29591d7b811c5a0f2a9",
        "loop": "63011f2df1357e3dec15584bd7c89cb26012d4ac19363a9fb0de54443f61920c",
        "detail": "e3910e84c7fa7b7230b6cff67c1d2ce1f9da1ff9c44c5bec633f7387c895f14b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/reaction-diffusion-bloom/1x1/detail.mp4",
      "bg": "#0e0e12",
      "posterFrame": 178,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "f8ade3df1a8cc5a401c26ab8475c5e44eedca496961a646e03b042ee0001a0f7",
        "loop": "e9a440a83241cfc8d58c3f5272c660fd548d15630cdf3fbd7f1b426c9c03791b",
        "detail": "83f429cf63a24f520eb6d3d89c63ed73e05b4acc5d6c5a2f8eb916cc49769697"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/244d63babcf78aad37eeb4c29900f4d376f7f87f6498581c322e9dbbb33fb6d2/index.mjs",
    "sha256": "244d63babcf78aad37eeb4c29900f4d376f7f87f6498581c322e9dbbb33fb6d2",
    "bytes": 66082,
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
    "at": "2026-10-09T10:42:42.404Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
